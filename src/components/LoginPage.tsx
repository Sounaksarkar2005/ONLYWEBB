import React from 'react';
import { motion } from 'motion/react';
import { SmokeyBackground, LoginForm } from '@/components/ui/login-form';
import { ArrowRight, Check } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (email: string) => void;
  onExploreGuest: () => void;
  currentUserEmail?: string | null;
}

export default function LoginPage({ onLoginSuccess, onExploreGuest, currentUserEmail }: LoginPageProps) {
  return (
    <div className="relative min-h-screen w-screen bg-gray-950 text-white font-sans flex flex-col justify-between overflow-hidden selection:bg-white selection:text-black z-50">
      
      {/* WebGL Smokey Background Shader (Full Cover) */}
      <SmokeyBackground 
        color="#FFFFFF" 
        backdropBlurAmount="sm"
        className="absolute inset-0 z-0" 
      />


      {/* Center Viewport Area containing the Login Card */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 my-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md flex flex-col items-center"
        >

          {/* If user is already authenticated */}
          {currentUserEmail ? (
            <div className="w-full max-w-sm p-8 space-y-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400 shadow-lg">
                <Check size={28} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Authenticated Session Active</h2>
                <p className="text-sm text-neutral-300">
                  Logged in as <span className="text-blue-400 font-semibold">{currentUserEmail}</span>
                </p>
              </div>
              <button
                onClick={onExploreGuest}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <span>Enter Main Website</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <LoginForm onLoginSuccess={onLoginSuccess} />
          )}
        </motion.div>
      </div>


    </div>
  );
}
