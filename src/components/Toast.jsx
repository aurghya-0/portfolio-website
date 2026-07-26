import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-mono text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
      <CheckCircle2 size={16} className="text-slate-950" />
      <span>{message}</span>
    </div>
  );
}
