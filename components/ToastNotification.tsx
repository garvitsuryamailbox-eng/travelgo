"use client";

import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "info" | "error";
  title: string;
  message?: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onDismiss
}: {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const bgStyles =
    toast.type === "success"
      ? "bg-slate-900 text-white border-emerald-500/50 shadow-emerald-500/10"
      : toast.type === "error"
      ? "bg-slate-900 text-white border-rose-500/50 shadow-rose-500/10"
      : "bg-slate-900 text-white border-blue-500/50 shadow-blue-500/10";

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200 ${bgStyles}`}
    >
      <div className="mt-0.5 shrink-0">
        {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
        {toast.type === "error" && <AlertCircle className="w-5 h-5 text-rose-400" />}
        {toast.type === "info" && <Info className="w-5 h-5 text-cyan-400" />}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-black tracking-wide text-white leading-tight">
          {toast.title}
        </h4>
        {toast.message && (
          <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed break-words">
            {toast.message}
          </p>
        )}
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
