"use client";

import React, { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 space-y-5 relative text-slate-900 border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-2">
            <User className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-slate-900">
            {mode === "login" ? "Welcome Back to TravelGo" : "Create TravelGo Account"}
          </h3>
          <p className="text-xs text-slate-500">
            {mode === "login" ? "Access your saved bookings and exclusive deals" : "Sign up to unlock instant discounts"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === "signup" && (
            <div>
              <label className="text-xs text-slate-700 font-bold block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold outline-none focus:border-blue-600"
                placeholder="e.g. Garvit Surya"
              />
            </div>
          )}

          <div>
            <label className="text-xs text-slate-700 font-bold block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold outline-none focus:border-blue-600"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="text-xs text-slate-700 font-bold block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold outline-none focus:border-blue-600"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
          >
            {mode === "login" ? "LOGIN TO TRAVELGO" : "CREATE ACCOUNT"}
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          {mode === "login" ? (
            <span>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-blue-600 font-bold hover:underline"
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
                className="text-blue-600 font-bold hover:underline"
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
