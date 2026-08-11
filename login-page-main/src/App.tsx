import { useState } from "react";
import { SmokeyBackground, LoginForm } from "@/components/ui/login-form";
import { Sliders, Sparkles, FolderTree, Code2, Check, Copy, Palette, Info, X } from "lucide-react";

export default function App() {
  const [shaderColor, setShaderColor] = useState("#1E40AF");
  const [blurAmount, setBlurAmount] = useState("sm");
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"demo" | "instructions">("demo");

  const colorPresets = [
    { name: "Cobalt Blue", hex: "#1E40AF" },
    { name: "Deep Violet", hex: "#6D28D9" },
    { name: "Emerald Wave", hex: "#047857" },
    { name: "Crimson Flame", hex: "#BE123C" },
    { name: "Golden Amber", hex: "#B45309" },
    { name: "Cyber Teal", hex: "#0F766E" },
  ];

  const blurOptions = ["none", "sm", "md", "lg", "xl", "2xl"];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="relative w-screen h-screen bg-gray-950 overflow-hidden font-sans">
      {/* WebGL Smokey Shader Background */}
      <SmokeyBackground 
        color={shaderColor} 
        backdropBlurAmount={blurAmount}
        className="absolute inset-0 z-0" 
      />

      {/* Top Bar Navigation & Controls */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 bg-gray-900/40 backdrop-blur-md border-b border-white/10 text-white">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600/30 rounded-xl border border-blue-500/30 text-blue-400">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-base font-semibold text-white tracking-wide">Smokey Shader Login</h1>
            <p className="text-xs text-gray-400">WebGL Fragment Shader + Glassmorphism</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab(activeTab === "demo" ? "instructions" : "demo")}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 rounded-lg transition"
          >
            {activeTab === "demo" ? (
              <>
                <Info size={15} />
                <span>Integration Guide</span>
              </>
            ) : (
              <>
                <Sparkles size={15} />
                <span>View Demo</span>
              </>
            )}
          </button>

          <button
            onClick={() => setShowConfigDrawer(!showConfigDrawer)}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg shadow-lg shadow-blue-600/30 transition text-white"
          >
            <Sliders size={15} />
            <span>Customize Shader</span>
          </button>
        </div>
      </header>

      {/* Main View Area */}
      {activeTab === "demo" ? (
        <div className="relative z-10 flex items-center justify-center w-full h-[calc(100vh-65px)] p-4">
          <LoginForm />
        </div>
      ) : (
        <div className="relative z-10 w-full h-[calc(100vh-65px)] overflow-y-auto p-6 md:p-12">
          <div className="max-w-4xl mx-auto space-y-8 bg-gray-900/80 backdrop-blur-xl border border-white/15 p-8 rounded-2xl text-gray-200 shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full mb-3">
                  Project Setup & Structure Guide
                </span>
                <h2 className="text-2xl font-bold text-white">Component Integration Instructions</h2>
                <p className="mt-1 text-sm text-gray-400">
                  Detailed documentation for Tailwind CSS, TypeScript, and shadcn project structure setup.
                </p>
              </div>
              <button
                onClick={() => setActiveTab("demo")}
                className="p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* 1. Project Requirements & Path Determination */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FolderTree className="text-blue-400" size={20} />
                1. Project Structure & Default Paths
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                In a standard React + TypeScript application adhering to the <code className="text-blue-300 bg-white/10 px-1.5 py-0.5 rounded">shadcn/ui</code> conventions:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-2 text-gray-300">
                <li><strong>Default Component Directory:</strong> <code className="text-blue-300 bg-white/10 px-1.5 py-0.5 rounded">/components/ui</code> or <code className="text-blue-300 bg-white/10 px-1.5 py-0.5 rounded">/src/components/ui</code></li>
                <li><strong>Default Styles Directory:</strong> <code className="text-blue-300 bg-white/10 px-1.5 py-0.5 rounded">/src/index.css</code> or <code className="text-blue-300 bg-white/10 px-1.5 py-0.5 rounded">/src/app/globals.css</code></li>
              </ul>
              
              <div className="p-4 bg-blue-950/40 border border-blue-500/30 rounded-xl text-sm text-blue-200 space-y-2">
                <strong className="text-blue-300 block">Why is creating <code className="bg-blue-900/50 px-1.5 py-0.5 rounded">/components/ui</code> important?</strong>
                <p className="text-xs leading-relaxed text-blue-200/90">
                  1. <strong>CLI Compatibility:</strong> The <code className="bg-blue-900/50 px-1 py-0.5 rounded">shadcn</code> CLI relies on <code className="bg-blue-900/50 px-1 py-0.5 rounded">components.json</code> configuration which defaults to placing primitive, reusable UI components in <code className="bg-blue-900/50 px-1 py-0.5 rounded">components/ui</code>.
                  <br />
                  2. <strong>Clean Architectural Separation:</strong> Distinguishes atomic primitive components (buttons, inputs, cards, dialogs) in <code className="bg-blue-900/50 px-1 py-0.5 rounded">/components/ui</code> from application-specific feature views located in <code className="bg-blue-900/50 px-1 py-0.5 rounded">/src/components</code> or <code className="bg-blue-900/50 px-1 py-0.5 rounded">/src/pages</code>.
                  <br />
                  3. <strong>Path Aliasing (<code className="bg-blue-900/50 px-1 py-0.5 rounded">@/components/ui</code>):</strong> Enables clean, uniform imports across all files without messy relative dot-dots (<code className="bg-blue-900/50 px-1 py-0.5 rounded">../../../components</code>).
                </p>
              </div>
            </section>

            {/* 2. Setup via shadcn CLI, Tailwind, TypeScript */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Code2 className="text-emerald-400" size={20} />
                2. Project Setup Commands
              </h3>
              
              <div className="space-y-4 text-xs font-mono">
                {/* Step A: Initialize shadcn */}
                <div className="p-4 bg-gray-950 border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="font-sans font-medium text-gray-300">Step A: Initialize shadcn CLI in your project</span>
                    <button
                      onClick={() => handleCopy("npx shadcn@latest init", 1)}
                      className="flex items-center gap-1 text-gray-400 hover:text-white"
                    >
                      {copiedIndex === 1 ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="font-sans text-xs">{copiedIndex === 1 ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-300 bg-black/40 p-3 rounded-lg overflow-x-auto">npx shadcn@latest init</pre>
                </div>

                {/* Step B: Install Tailwind CSS */}
                <div className="p-4 bg-gray-950 border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="font-sans font-medium text-gray-300">Step B: Install Tailwind CSS (Vite / React)</span>
                    <button
                      onClick={() => handleCopy("npm install -D tailwindcss @tailwindcss/vite", 2)}
                      className="flex items-center gap-1 text-gray-400 hover:text-white"
                    >
                      {copiedIndex === 2 ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="font-sans text-xs">{copiedIndex === 2 ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-300 bg-black/40 p-3 rounded-lg overflow-x-auto">npm install -D tailwindcss @tailwindcss/vite</pre>
                </div>

                {/* Step C: Install lucide-react */}
                <div className="p-4 bg-gray-950 border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="font-sans font-medium text-gray-300">Step C: Install Component Dependencies</span>
                    <button
                      onClick={() => handleCopy("npm install lucide-react", 3)}
                      className="flex items-center gap-1 text-gray-400 hover:text-white"
                    >
                      {copiedIndex === 3 ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="font-sans text-xs">{copiedIndex === 3 ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-300 bg-black/40 p-3 rounded-lg overflow-x-auto">npm install lucide-react</pre>
                </div>
              </div>
            </section>

            {/* 3. Usage Example */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Palette className="text-purple-400" size={20} />
                3. Copy-Pasted Component Location
              </h3>
              <p className="text-sm text-gray-300">
                The <code className="text-purple-300 bg-white/10 px-1.5 py-0.5 rounded">login-form.tsx</code> component has been successfully created in <code className="text-purple-300 bg-white/10 px-1.5 py-0.5 rounded">/components/ui/login-form.tsx</code> and can be imported with:
              </p>
              <pre className="text-purple-300 bg-gray-950 p-4 border border-white/10 rounded-xl text-xs font-mono">
{`import { SmokeyBackground, LoginForm } from "@/components/ui/login-form";

export default function Page() {
  return (
    <main className="relative w-screen h-screen bg-gray-900">
      <SmokeyBackground color="#1E40AF" backdropBlurAmount="sm" />
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
    </main>
  );
}`}
              </pre>
            </section>
          </div>
        </div>
      )}

      {/* Customize Shader Drawer / Modal */}
      {showConfigDrawer && (
        <div className="absolute right-6 top-20 z-30 w-80 p-5 bg-gray-900/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-white space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Sliders size={16} className="text-blue-400" />
              Shader Customizer
            </h3>
            <button
              onClick={() => setShowConfigDrawer(false)}
              className="p-1 text-gray-400 hover:text-white rounded-md"
            >
              <X size={16} />
            </button>
          </div>

          {/* Color Preset Picker */}
          <div className="space-y-2">
            <label className="text-xs text-gray-300 font-medium">Shader Glow Color</label>
            <div className="grid grid-cols-3 gap-2">
              {colorPresets.map((preset) => (
                <button
                  key={preset.hex}
                  onClick={() => setShaderColor(preset.hex)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs transition ${
                    shaderColor === preset.hex
                      ? "border-blue-400 bg-blue-500/20 font-medium text-white"
                      : "border-white/10 bg-white/5 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full mb-1 border border-white/20 shadow-sm"
                    style={{ backgroundColor: preset.hex }}
                  />
                  <span className="text-[10px] truncate max-w-full">{preset.name}</span>
                </button>
              ))}
            </div>
            {/* Custom Hex Input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="color"
                value={shaderColor}
                onChange={(e) => setShaderColor(e.target.value)}
                className="w-8 h-8 rounded border border-white/20 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={shaderColor}
                onChange={(e) => setShaderColor(e.target.value)}
                className="flex-1 bg-white/5 border border-white/15 px-2.5 py-1 rounded text-xs text-white font-mono"
                placeholder="#1E40AF"
              />
            </div>
          </div>

          {/* Backdrop Blur Selection */}
          <div className="space-y-2">
            <label className="text-xs text-gray-300 font-medium">Backdrop Blur Amount</label>
            <div className="grid grid-cols-3 gap-1.5">
              {blurOptions.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setBlurAmount(amt)}
                  className={`py-1.5 px-2 text-xs rounded-lg border transition ${
                    blurAmount === amt
                      ? "border-blue-400 bg-blue-500/20 text-white font-medium"
                      : "border-white/10 bg-white/5 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
