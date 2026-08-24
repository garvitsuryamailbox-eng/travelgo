import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Clean Workspace Ready</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Ready for Your New Project
        </h1>

        <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
          The workspace has been completely cleared and reset. Tell me what you want to build next, and we will create it from scratch with modern design and full functionality.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-mono">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>Next.js 16 • Tailwind CSS 4 • TypeScript • App Router</span>
        </div>
      </div>
    </main>
  );
}
