import { useEffect, useRef, useState } from 'react';
import { CanvasConfig, AccentColor } from '../types';

interface BackgroundCanvasProps {
  config: CanvasConfig;
  accentColor: AccentColor;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  phase: number;
  colorHex: string;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge3D {
  u: number;
  v: number;
}

function getGeometry3D(type: 'tesseract' | 'dodecahedron' | 'icosahedron' | 'none', scaleMultiplier: number) {
  const vertices: Point3D[] = [];
  const edges: Edge3D[] = [];

  if (type === 'none') {
    return { vertices, edges };
  }

  const phi = (1 + Math.sqrt(5)) / 2;

  if (type === 'icosahedron') {
    const scale = 150 * scaleMultiplier;
    const coords = [
      [0, 1, phi], [0, 1, -phi], [0, -1, phi], [0, -1, -phi],
      [1, phi, 0], [1, -phi, 0], [-1, phi, 0], [-1, -phi, 0],
      [phi, 0, 1], [phi, 0, -1], [-phi, 0, 1], [-phi, 0, -1]
    ];
    coords.forEach(([x, y, z]) => {
      vertices.push({ x: x * scale, y: y * scale, z: z * scale });
    });

    const minD2 = 4 * scale * scale;
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i].x - vertices[j].x;
        const dy = vertices[i].y - vertices[j].y;
        const dz = vertices[i].z - vertices[j].z;
        const d2 = dx*dx + dy*dy + dz*dz;
        if (Math.abs(d2 - minD2) < 10) {
          edges.push({ u: i, v: j });
        }
      }
    }
  } else if (type === 'dodecahedron') {
    const scale = 115 * scaleMultiplier;
    const coords: [number, number, number][] = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
      [0, 1/phi, phi], [0, 1/phi, -phi], [0, -1/phi, phi], [0, -1/phi, -phi],
      [1/phi, phi, 0], [1/phi, -phi, 0], [-1/phi, phi, 0], [-1/phi, -phi, 0],
      [phi, 0, 1/phi], [phi, 0, -1/phi], [-phi, 0, 1/phi], [-phi, 0, -1/phi]
    ];
    coords.forEach(([x, y, z]) => {
      vertices.push({ x: x * scale, y: y * scale, z: z * scale });
    });

    let minDistSq = Infinity;
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i].x - vertices[j].x;
        const dy = vertices[i].y - vertices[j].y;
        const dz = vertices[i].z - vertices[j].z;
        const d2 = dx*dx + dy*dy + dz*dz;
        if (d2 < minDistSq) minDistSq = d2;
      }
    }
    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i].x - vertices[j].x;
        const dy = vertices[i].y - vertices[j].y;
        const dz = vertices[i].z - vertices[j].z;
        const d2 = dx*dx + dy*dy + dz*dz;
        if (d2 < minDistSq * 1.05) {
          edges.push({ u: i, v: j });
        }
      }
    }
  } else if (type === 'tesseract') {
    const scale = scaleMultiplier;
    const coords = [-1, 1];
    for (const x of coords) {
      for (const y of coords) {
        for (const z of coords) {
          vertices.push({ x: x * 160 * scale, y: y * 160 * scale, z: z * 160 * scale });
        }
      }
    }
    for (const x of coords) {
      for (const y of coords) {
        for (const z of coords) {
          vertices.push({ x: x * 90 * scale, y: y * 90 * scale, z: z * 90 * scale });
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 8; j++) {
        let diffs = 0;
        if (vertices[i].x !== vertices[j].x) diffs++;
        if (vertices[i].y !== vertices[j].y) diffs++;
        if (vertices[i].z !== vertices[j].z) diffs++;
        if (diffs === 1) {
          edges.push({ u: i, v: j });
        }
      }
    }
    for (let i = 8; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diffs = 0;
        if (vertices[i].x !== vertices[j].x) diffs++;
        if (vertices[i].y !== vertices[j].y) diffs++;
        if (vertices[i].z !== vertices[j].z) diffs++;
        if (diffs === 1) {
          edges.push({ u: i, v: j });
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      edges.push({ u: i, v: i + 8 });
    }
  }

  return { vertices, edges };
}

export default function BackgroundCanvas({ config, accentColor }: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const requestRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle3D[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const dragRotationRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const autoRotationRef = useRef({ x: 0, y: 0, z: 0 });

  // Get accent color hex codes
  const getColors = (accent: AccentColor) => {
    switch (accent) {
      case 'cyber_amber':
        return { primary: '#f59e0b', secondary: '#d97706', base: '#fbbf24' };
      case 'toxic_green':
        return { primary: '#22c55e', secondary: '#16a34a', base: '#4ade80' };
      case 'neon_cobalt':
        return { primary: '#3b82f6', secondary: '#2563eb', base: '#60a5fa' };
      case 'pure_mono':
      default:
        return { primary: '#ffffff', secondary: '#888888', base: '#cccccc' };
    }
  };

  // Track dimensions and window resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      dimensionsRef.current = { width: rect.width, height: rect.height };
      canvasRef.current.width = rect.width;
      canvasRef.current.height = rect.height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Track mouse coordinates & dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };

      if (isDraggingRef.current) {
        const deltaX = e.clientX - lastMousePosRef.current.x;
        const deltaY = e.clientY - lastMousePosRef.current.y;
        dragRotationRef.current.y += deltaX * 0.007;
        dragRotationRef.current.x += deltaY * 0.007;
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      isDraggingRef.current = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Initialize Particles based on visual style
  useEffect(() => {
    const { width, height } = dimensionsRef.current;
    const count = config.particleCount;
    const style = config.style;
    const colors = getColors(accentColor);
    const newParticles: Particle3D[] = [];

    const centerWidth = width > 0 ? width : window.innerWidth;
    const centerHeight = height > 0 ? height : window.innerHeight;

    if (style === 'constellation') {
      // Create random points inside a 3D bounding volume [-200, 200]
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: (Math.random() - 0.5) * 450,
          y: (Math.random() - 0.5) * 450,
          z: (Math.random() - 0.5) * 450,
          baseX: (Math.random() - 0.5) * 450,
          baseY: (Math.random() - 0.5) * 450,
          baseZ: (Math.random() - 0.5) * 450,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.4,
          phase: Math.random() * Math.PI * 2,
          colorHex: i % 4 === 0 ? colors.primary : i % 4 === 1 ? colors.secondary : colors.base,
        });
      }
    } else if (style === 'quantum_field') {
      // Create grid of points
      const cols = Math.ceil(Math.sqrt(count * (centerWidth / centerHeight)));
      const rows = Math.ceil(count / cols);
      const cellW = 500 / cols;
      const cellH = 500 / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = (c - cols / 2) * cellW + (Math.random() - 0.5) * 15;
          const py = (r - rows / 2) * cellH + (Math.random() - 0.5) * 15;
          newParticles.push({
            x: px,
            y: py,
            z: 0,
            baseX: px,
            baseY: py,
            baseZ: 0,
            vx: 0,
            vy: 0,
            vz: 0,
            phase: (c * 0.3) + (r * 0.5),
            colorHex: (r + c) % 2 === 0 ? colors.primary : colors.base,
          });
        }
      }
    } else if (style === 'hyper_helix') {
      // Double Helix spiral
      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 14; // Multi-turn spiral
        const isHelixA = i % 2 === 0;
        const angleOffset = isHelixA ? 0 : Math.PI;
        
        const r = 120 + Math.sin(theta * 0.2) * 30; // radius varies slightly
        const py = ((i / count) - 0.5) * 400; // distribute along vertical axis
        const px = r * Math.cos(theta + angleOffset);
        const pz = r * Math.sin(theta + angleOffset);

        newParticles.push({
          x: px,
          y: py,
          z: pz,
          baseX: px,
          baseY: py,
          baseZ: pz,
          vx: 0,
          vy: 0,
          vz: 0,
          phase: theta,
          colorHex: isHelixA ? colors.primary : colors.secondary,
        });
      }
    } else if (style === 'wireframe_3d') {
      // Small ambient field of outer star nodes
      for (let i = 0; i < Math.min(count, 80); i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi_angle = Math.acos(2.0 * v - 1.0);
        const r = 200 + Math.random() * 120; // outer boundary stars
        
        const px = r * Math.sin(phi_angle) * Math.cos(theta);
        const py = r * Math.sin(phi_angle) * Math.sin(theta);
        const pz = r * Math.cos(phi_angle);

        newParticles.push({
          x: px,
          y: py,
          z: pz,
          baseX: px,
          baseY: py,
          baseZ: pz,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          vz: (Math.random() - 0.5) * 0.15,
          phase: Math.random() * Math.PI * 2,
          colorHex: i % 3 === 0 ? colors.primary : colors.base,
        });
      }
    }

    particlesRef.current = newParticles;
  }, [config.particleCount, config.style, accentColor]);

  // Main Render Loop
  useEffect(() => {
    let angleX = 0.001 * config.speed;
    let angleY = 0.002 * config.speed;
    let angleZ = 0.0008 * config.speed;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        requestRef.current = requestAnimationFrame(render);
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        requestRef.current = requestAnimationFrame(render);
        return;
      }

      const { width, height } = dimensionsRef.current;
      if (width === 0 || height === 0) {
        requestRef.current = requestAnimationFrame(render);
        return;
      }

      // Clear with slight alpha decay for path trails if speed is high, or standard clear
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Render vertical/horizontal guidelines to blend with the web interface grids
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      
      // Draw 3 primary accent structural guidelines
      const colsToDraw = [width * 0.25, width * 0.5, width * 0.75];
      colsToDraw.forEach(col => {
        ctx.beginPath();
        ctx.moveTo(col, 0);
        ctx.lineTo(col, height);
        ctx.stroke();
      });

      const colors = getColors(accentColor);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // 3D perspective projection factor
      const fov = 300;
      const centerX = width / 2;
      const centerY = height / 2;

      // Rotation speeds
      const rx = angleX;
      const ry = angleY;
      const rz = angleZ;

      // Accumulate automatic rotation
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);

      // Map transformed 2D points to use for connections
      const projected: { x: number; y: number; z: number; size: number; alpha: number; hex: string }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Dynamic style modifications
        if (config.style === 'quantum_field') {
          // Wave oscillations
          p.phase += 0.01 * config.speed;
          p.z = Math.sin(p.phase) * 60 + Math.cos(p.x * 0.01 + p.phase) * 40;
        } else if (config.style === 'hyper_helix') {
          // Spiral expansion/shrink oscillations
          p.phase += 0.005 * config.speed;
          const theta = p.phase;
          const isHelixA = i % 2 === 0;
          const angleOffset = isHelixA ? 0 : Math.PI;
          const r = 120 + Math.sin(theta * 2) * 30;
          p.x = r * Math.cos(theta + angleOffset);
          p.z = r * Math.sin(theta + angleOffset);
          // Gently float vertical
          p.y = p.baseY + Math.cos(p.phase * 0.5) * 15;
        } else {
          // Constellation drift velocities
          p.x += p.vx * config.speed;
          p.y += p.vy * config.speed;
          p.z += p.vz * config.speed;

          // Box wrap-around check for drifting constellation particles
          const bounds = 250;
          if (p.x < -bounds) p.x = bounds;
          if (p.x > bounds) p.x = -bounds;
          if (p.y < -bounds) p.y = bounds;
          if (p.y > bounds) p.y = -bounds;
          if (p.z < -bounds) p.z = bounds;
          if (p.z > bounds) p.z = -bounds;
        }

        // 2. Perform 3D Rotations
        // Rotate about Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate about X axis
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        // Rotate about Z axis
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        // 3. 3D projection parameters
        const distance = 400; // camera distance
        const scale = fov / (fov + z2 + distance);
        const projX = centerX + x3 * scale * 1.5;
        const projY = centerY + y3 * scale * 1.5;

        // Interactive mouse gravity / repulsion
        let finalProjX = projX;
        let finalProjY = projY;

        if (mouse.active) {
          const dx = mouse.x - projX;
          const dy = mouse.y - projY;
          const dist = Math.hypot(dx, dy);
          const limit = 200;

          if (dist < limit && dist > 1) {
            const force = (1 - dist / limit) * config.interactiveForce;
            if (config.interactiveMode === 'repel') {
              finalProjX -= (dx / dist) * force * 50;
              finalProjY -= (dy / dist) * force * 50;
            } else if (config.interactiveMode === 'attract') {
              finalProjX += (dx / dist) * force * 50;
              finalProjY += (dy / dist) * force * 50;
            } else if (config.interactiveMode === 'gravity_wave') {
              const wave = Math.sin(dist * 0.1 - Date.now() * 0.01) * 10;
              finalProjX += (dx / dist) * wave * force;
              finalProjY += (dy / dist) * wave * force;
            }
          }
        }

        // Base sizing and alpha on depth (z2 is depth from -250 to 250)
        const depthNormalized = (z2 + 250) / 500; // 0 (near/front) to 1 (far/back)
        const pointAlpha = Math.max(0.08, Math.min(0.9, 0.95 - depthNormalized * 0.8));
        const pointSize = Math.max(0.6, Math.min(4.0, (1 - depthNormalized) * 3.5 + 0.5));

        projected.push({
          x: finalProjX,
          y: finalProjY,
          z: z2,
          size: pointSize,
          alpha: pointAlpha,
          hex: p.colorHex,
        });
      }

      // 4. Draw Lines (Constellations / Grids)
      if (config.showLines) {
        ctx.lineWidth = 0.5;
        const maxDist = config.connectionDistance;

        if (config.style === 'quantum_field') {
          // In quantum field mesh, connect near neighbors by indexing grid
          const cols = Math.ceil(Math.sqrt(particles.length * (width / height)));
          for (let r = 0; r < Math.floor(particles.length / cols); r++) {
            for (let c = 0; c < cols; c++) {
              const currentIdx = r * cols + c;
              if (currentIdx >= projected.length) continue;

              const curr = projected[currentIdx];

              // Connect right
              if (c < cols - 1) {
                const rightIdx = currentIdx + 1;
                if (rightIdx < projected.length) {
                  const right = projected[rightIdx];
                  const d = Math.hypot(curr.x - right.x, curr.y - right.y);
                  if (d < maxDist) {
                    const avgAlpha = (curr.alpha + right.alpha) * 0.18 * (1 - d / maxDist);
                    ctx.strokeStyle = `rgba(${hexToRgb(curr.hex)}, ${avgAlpha})`;
                    ctx.beginPath();
                    ctx.moveTo(curr.x, curr.y);
                    ctx.lineTo(right.x, right.y);
                    ctx.stroke();
                  }
                }
              }

              // Connect bottom
              const bottomIdx = currentIdx + cols;
              if (bottomIdx < projected.length) {
                const bottom = projected[bottomIdx];
                const d = Math.hypot(curr.x - bottom.x, curr.y - bottom.y);
                if (d < maxDist) {
                  const avgAlpha = (curr.alpha + bottom.alpha) * 0.18 * (1 - d / maxDist);
                  ctx.strokeStyle = `rgba(${hexToRgb(curr.hex)}, ${avgAlpha})`;
                  ctx.beginPath();
                  ctx.moveTo(curr.x, curr.y);
                  ctx.lineTo(bottom.x, bottom.y);
                  ctx.stroke();
                }
              }
            }
          }
        } else {
          // Standard distance-based search for constellations and helices
          // Optimize search spacing to keep 60 FPS
          const step = particles.length > 150 ? 2 : 1;
          for (let i = 0; i < projected.length; i += step) {
            const p1 = projected[i];
            for (let j = i + 1; j < projected.length; j += step) {
              const p2 = projected[j];
              const dX = p1.x - p2.x;
              const dY = p1.y - p2.y;
              const dist = dX * dX + dY * dY;
              const maxDistSq = maxDist * maxDist;

              if (dist < maxDistSq) {
                const actualDist = Math.sqrt(dist);
                const lineAlpha = (1 - actualDist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.22;
                ctx.strokeStyle = `rgba(${hexToRgb(p1.hex)}, ${lineAlpha})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // 4.5. Draw Interactive 3D Wireframe Shape (if configured)
      const objType = config.object3DType || 'icosahedron';
      if (objType !== 'none') {
        const objScale = config.object3DScale || 1.0;

        // Position the 3D element a bit lower, centered beautifully in the middle of the screen
        const objCenterX = centerX;
        const objCenterY = Math.min(height / 2, 490) + 10;

        // Auto rotation speed factor
        autoRotationRef.current.y += 0.003 * config.speed;
        autoRotationRef.current.x += 0.0015 * config.speed;

        // Combine auto-rotation, drag rotation, and mouse-hover spring-tilt
        let rotY = autoRotationRef.current.y + dragRotationRef.current.y;
        let rotX = autoRotationRef.current.x + dragRotationRef.current.x;
        const rotZ = 0;

        if (mouse.active) {
          // Direct hover spring-tilt
          const mouseOffsetNormX = (mouse.x - objCenterX) / objCenterX; // [-1, 1]
          const mouseOffsetNormY = (mouse.y - objCenterY) / objCenterY; // [-1, 1]
          rotY += mouseOffsetNormX * 0.25;
          rotX -= mouseOffsetNormY * 0.25;
        }

        const cosY_obj = Math.cos(rotY);
        const sinY_obj = Math.sin(rotY);
        const cosX_obj = Math.cos(rotX);
        const sinX_obj = Math.sin(rotX);
        const cosZ_obj = Math.cos(rotZ);
        const sinZ_obj = Math.sin(rotZ);

        const objFov = 350;
        const objDistance = 380; // camera distance

        if (objType === 'topo_blob') {
          // Drawing the premium 3D contour terrain blob from the screenshot!
          const time = Date.now() * 0.001 * config.speed;
          const numSlices = 72; // dense contours
          const numPointsPerSlice = 76;
          const baseRadius = 155 * objScale;

          interface Slice {
            points: { x: number; y: number; z: number }[];
            avgZ: number;
          }
          const slices: Slice[] = [];

          for (let s = 0; s < numSlices; s++) {
            const tSlice = s / (numSlices - 1); // 0 to 1
            const yOffset = (tSlice * 2 - 1) * baseRadius;

            const h = Math.abs(yOffset);
            if (h >= baseRadius) continue;
            const sliceRadius = Math.sqrt(baseRadius * baseRadius - h * h);
            if (sliceRadius < 1) continue;

            const slicePoints: { x: number; y: number; z: number }[] = [];
            let totalZ = 0;

            for (let p = 0; p < numPointsPerSlice; p++) {
              const theta = (p / numPointsPerSlice) * Math.PI * 2;
              
              const x0 = sliceRadius * Math.cos(theta);
              const z0 = sliceRadius * Math.sin(theta);
              const y0 = yOffset;

              // Wave distortion matching the premium contoured terrain
              const f1 = Math.sin(x0 * 0.015 + time * 0.6) * Math.cos(z0 * 0.015 - time * 0.4) * Math.sin(y0 * 0.012 + time * 0.2);
              const f2 = Math.sin(x0 * 0.035 - time * 0.8) * Math.cos(y0 * 0.032 + time * 0.5) * 0.5;
              const f3 = Math.cos(z0 * 0.055 + time * 1.0) * Math.sin(x0 * 0.055 - time * 0.3) * 0.25;
              const displacement = f1 + f2 + f3;

              const radMult = 1.0 + displacement * 0.45;
              const xDeformed = x0 * radMult;
              const zDeformed = z0 * radMult;
              const yDeformed = y0 + displacement * 10 * objScale;

              // Y-axis rotation
              const rx1 = xDeformed * cosY_obj - zDeformed * sinY_obj;
              const rz1 = xDeformed * sinY_obj + zDeformed * cosY_obj;

              // X-axis rotation
              const ry2 = yDeformed * cosX_obj - rz1 * sinX_obj;
              const rz2 = yDeformed * sinX_obj + rz1 * cosX_obj;

              // Z-axis rotation (optional, simple)
              const rx3 = rx1 * cosZ_obj - ry2 * sinZ_obj;
              const ry3 = rx1 * sinZ_obj + ry2 * cosZ_obj;

              // Perspective Projection
              const projScale = objFov / (objFov + rz2 + objDistance);
              const px = objCenterX + rx3 * projScale * 1.5;
              const py = objCenterY + ry3 * projScale * 1.5;

              slicePoints.push({ x: px, y: py, z: rz2 });
              totalZ += rz2;
            }

            slices.push({
              points: slicePoints,
              avgZ: totalZ / numPointsPerSlice,
            });
          }

          // Sort slices back-to-front (descending avgZ)
          slices.sort((a, b) => b.avgZ - a.avgZ);

          // Draw the background digital neon grids (from the screenshot!)
          ctx.shadowBlur = 0;
          ctx.lineWidth = 1.0;
          const laserColor = colors.primary;
          const rgbLaser = hexToRgb(laserColor);

          // Draw backdrop horizontal indicators
          const laserYPositions = [objCenterY - 90, objCenterY, objCenterY + 90];
          laserYPositions.forEach((ly, index) => {
            ctx.strokeStyle = `rgba(${rgbLaser}, 0.12)`;
            ctx.beginPath();
            ctx.moveTo(objCenterX - 280, ly);
            ctx.lineTo(objCenterX + 280, ly);
            ctx.stroke();

            // Segmented core laser
            ctx.strokeStyle = `rgba(${rgbLaser}, 0.45)`;
            ctx.setLineDash([6, 18, 32, 18]);
            ctx.beginPath();
            ctx.moveTo(objCenterX - 180, ly);
            ctx.lineTo(objCenterX + 180, ly);
            ctx.stroke();
            ctx.setLineDash([]);

            // Crosshair markers
            ctx.fillStyle = `rgba(${rgbLaser}, 0.55)`;
            ctx.fillRect(objCenterX - 180, ly - 3, 1, 6);
            ctx.fillRect(objCenterX + 180, ly - 3, 1, 6);

            // High-tech labels
            ctx.font = '8px monospace';
            ctx.fillStyle = `rgba(${rgbLaser}, 0.35)`;
            if (index === 0) {
              ctx.fillText('SYS_LOC_ALPHA // 0.44', objCenterX - 250, ly - 6);
            } else if (index === 1) {
              ctx.fillText('VECTOR_TARGET_MATRIX // ACTIVE', objCenterX + 195, ly - 6);
            } else {
              ctx.fillText('TRANSMISSION_AXIS_Z // SYNCHRONIZED', objCenterX - 250, ly - 6);
            }
          });

          // Draw the 3D sliced blob contours
          slices.forEach((slice, sIdx) => {
            if (slice.points.length < 3) return;

            // Fill background with dark canvas color to mask rear layers
            ctx.fillStyle = '#050505';
            ctx.beginPath();
            ctx.moveTo(slice.points[0].x, slice.points[0].y);
            for (let i = 1; i < slice.points.length; i++) {
              ctx.lineTo(slice.points[i].x, slice.points[i].y);
            }
            ctx.closePath();
            ctx.fill();

            // Stroke line style (fade lines based on depth)
            const normZ = (slice.avgZ + 150) / 300;
            const alpha = Math.max(0.08, Math.min(0.9, 0.9 - normZ * 0.72));
            
            // Front slices are clean monochrome white, fading into beautiful primary/secondary color at the back
            let strokeColor;
            if (normZ < 0.35) {
              strokeColor = `rgba(245, 245, 245, ${alpha})`;
            } else {
              strokeColor = `rgba(${hexToRgb(colors.primary)}, ${alpha})`;
            }

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = normZ < 0.3 ? 1.5 : 1.0;
            
            if (config.glowEffect && normZ < 0.22) {
              ctx.shadowBlur = 4;
              ctx.shadowColor = colors.primary;
            } else {
              ctx.shadowBlur = 0;
            }

            ctx.beginPath();
            ctx.moveTo(slice.points[0].x, slice.points[0].y);
            for (let i = 1; i < slice.points.length; i++) {
              ctx.lineTo(slice.points[i].x, slice.points[i].y);
            }
            ctx.closePath();
            ctx.stroke();

            // Draw technical data nodes on the rings periodically
            if (sIdx % 7 === 0) {
              ctx.shadowBlur = 0;
              const dotIndex = Math.floor(slice.points.length * 0.35);
              const pt = slice.points[dotIndex];
              if (pt) {
                ctx.fillStyle = `rgba(${hexToRgb(colors.secondary)}, ${alpha * 0.9})`;
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, 2.0, 0, Math.PI * 2);
                ctx.fill();
                
                if (sIdx % 14 === 0) {
                  ctx.font = '7px monospace';
                  ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
                  ctx.fillText(`C[${sIdx}].v[${dotIndex}]`, pt.x + 8, pt.y - 3);
                }
              }
            }
          });

          ctx.shadowBlur = 0; // reset
        } else {
          // Standard wireframe rendering
          const geom = getGeometry3D(objType, objScale);

          // Project vertices
          const objProjected: { x: number; y: number; z: number }[] = [];

          for (let i = 0; i < geom.vertices.length; i++) {
            const v = geom.vertices[i];

            // Y rotation
            let x1 = v.x * cosY_obj - v.z * sinY_obj;
            let rz1 = v.x * sinY_obj + v.z * cosY_obj;

            // X rotation
            let y2 = v.y * cosX_obj - rz1 * sinX_obj;
            let rz2 = v.y * sinX_obj + rz1 * cosX_obj;

            // Z rotation
            let rx3 = x1 * cosZ_obj - y2 * sinZ_obj;
            let ry3 = x1 * sinZ_obj + y2 * cosZ_obj;

            // 3D Perspective Projection
            const scale = objFov / (objFov + rz2 + objDistance);
            const px = objCenterX + rx3 * scale * 1.5;
            const py = objCenterY + ry3 * scale * 1.5;

            objProjected.push({ x: px, y: py, z: rz2 });
          }

          // Draw solid glowing edges
          ctx.lineWidth = 1.5;
          if (config.glowEffect) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = colors.primary;
          }

          geom.edges.forEach(edge => {
            const p1 = objProjected[edge.u];
            const p2 = objProjected[edge.v];

            if (p1 && p2) {
              // Depth-based line alpha
              const avgZ = (p1.z + p2.z) / 2;
              const normZ = (avgZ + 150) / 300; // 0 to 1
              const lineAlpha = Math.max(0.12, Math.min(0.85, 0.85 - normZ * 0.65));

              ctx.strokeStyle = `rgba(${hexToRgb(colors.primary)}, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });

          // Draw glowing vertex nodes
          objProjected.forEach((p, idx) => {
            const normZ = (p.z + 150) / 300;
            const nodeAlpha = Math.max(0.3, Math.min(0.95, 0.95 - normZ * 0.5));
            const nodeSize = Math.max(2.5, Math.min(6.5, (1 - normZ) * 4 + 2.5));

            if (config.glowEffect) {
              ctx.shadowBlur = nodeSize * 2.5;
              ctx.shadowColor = colors.secondary;
            }

            ctx.fillStyle = `rgba(${hexToRgb(colors.secondary)}, ${nodeAlpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, nodeSize, 0, Math.PI * 2);
            ctx.fill();

            // High-tech vertex coordinate labeling overlay
            if (idx % 3 === 0) {
              ctx.shadowBlur = 0;
              ctx.font = '8px monospace';
              ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha * 0.35})`;
              ctx.fillText(
                `v[${idx}]: [${Math.round(p.x)},${Math.round(p.y)}]`,
                p.x + 8,
                p.y - 4
              );
            }
          });

          ctx.shadowBlur = 0; // reset
        }
      }

      // 5. Draw Particle Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        
        // Skip off-screen particles
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) continue;

        if (config.glowEffect) {
          ctx.shadowBlur = p.size * 2;
          ctx.shadowColor = p.hex;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(${hexToRgb(p.hex)}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Reset shadows for background grids and text
      ctx.shadowBlur = 0;

      // Draw subtle real-time physics status parameters overlay in corners to make it tech-forward
      ctx.font = '9px monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fillText(`ENGINE: WEB_GL_CANVAS_2D`, 16, height - 28);
      ctx.fillText(`NODES: ${particles.length} | FOCUS: ${config.style.toUpperCase()}`, 16, height - 16);
      
      if (mouse.active) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText(`GRAV_COORDS: [${Math.round(mouse.x)}px, ${Math.round(mouse.y)}px]`, width - 180, height - 16);
      } else {
        ctx.fillText(`MOUSE: SLEEP_MODE`, width - 130, height - 16);
      }

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [config, accentColor]);

  // Helper utility to convert Hex to RGB values
  const hexToRgb = (hex?: string): string => {
    if (!hex) return '255, 255, 255';
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '255, 255, 255';
  };

  return (
    <div
      id="background-canvas-container"
      ref={containerRef}
      className="absolute inset-0 w-full h-full bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <canvas
        id="bg-interactive-3d-canvas"
        ref={canvasRef}
        className="block w-full h-full opacity-70 transition-opacity duration-700"
      />
    </div>
  );
}
