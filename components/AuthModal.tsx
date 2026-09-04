"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Mail, Lock, User, Sparkles, CheckCircle2 } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; loggedIn: boolean; email: string }) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess
}: AuthModalProps) {
  if (!isOpen) return null;

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("garvit@travelgo.in");
  const [name, setName] = useState("Garvit Surya");
  const [password, setPassword] = useState("••••••••");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess({
      name: name || "Traveler",
      email,
      loggedIn: true
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-2">
            <User className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">
            {mode === "login" ? "Welcome Back to TravelGo" : "Create TravelGo Account"}
          </h3>
          <p className="text-xs text-slate-400">
            {mode === "login" ? "Access your saved bookings and exclusive fares" : "Sign up to unlock instant discounts"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Your Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                  placeholder="e.g. Garvit Surya"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                placeholder="name@example.com"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
                placeholder="••••••••"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
          >
            {mode === "login" ? "LOGIN TO TRAVELGO" : "CREATE ACCOUNT"}
          </button>
        </form>

        <div className="text-center text-xs text-slate-400">
          {mode === "login" ? (
            <span>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-blue-400 font-bold hover:underline"
              >
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-blue-400 font-bold hover:underline"
              >
                Log In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
