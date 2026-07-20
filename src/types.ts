export type VisualStyle = 'constellation' | 'quantum_field' | 'hyper_helix' | 'wireframe_3d';
export type AccentColor = 'pure_mono' | 'cyber_amber' | 'toxic_green' | 'neon_cobalt';

export interface CanvasConfig {
  style: VisualStyle;
  object3DType: 'tesseract' | 'dodecahedron' | 'icosahedron' | 'topo_blob' | 'none';
  object3DScale: number;
  particleCount: number;
  speed: number;
  connectionDistance: number;
  interactiveForce: number; // repulsion/attraction force
  interactiveMode: 'repel' | 'attract' | 'gravity_wave';
  showLines: boolean;
  glowEffect: boolean;
}

export type ProjectScope = 'monolith' | 'immersive_spa' | 'fullstack_portal';
export type VisualFidelity = 'minimalist' | 'interactive_3d' | 'brutalist_cyber';

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  complexityContribution: number;
}

export interface EstimatorState {
  scope: ProjectScope;
  fidelity: VisualFidelity;
  selectedAddOns: string[];
}
