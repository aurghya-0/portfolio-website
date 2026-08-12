import React from 'react';
import { Sparkles, Globe, ArrowLeft, Tv } from 'lucide-react';

export default function PageTransitionCurtain({ isTransitioning, message = "Loading Page..." }) {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-page)] theme-body backdrop-blur-2xl flex flex-col items-center justify-center select-none animate-in fade-in duration-300">
      {/* Ambient Glow background */}
      <div className="absolute w-96 h-96 bg-[var(--glow-orb)] rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4 p-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--accent-crimson)] shadow-2xl flex items-center justify-center animate-bounce">
            <Sparkles size={28} className="text-[var(--accent-gold)] animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--accent-crimson)] border-2 border-[var(--bg-page)] animate-ping"></span>
        </div>

        <div className="space-y-1">
          <h3 className="font-['Cinzel'] font-bold text-xl sm:text-2xl theme-title tracking-tight">{message}</h3>
          <p className="text-xs font-mono theme-crimson">Aurghyadip Kundu · Academic Portfolio</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Utility function to handle animated page transitions
 * Supports View Transitions API with graceful fallback curtain overlay
 */
export function navigateWithTransition(targetUrl, setTransitionState, customMessage) {
  if (setTransitionState) {
    setTransitionState({ active: true, message: customMessage || "Navigating..." });
  }

  if (document.startViewTransition) {
    document.startViewTransition(() => {
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  } else {
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 350);
  }
}
