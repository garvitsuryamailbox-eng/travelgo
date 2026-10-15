"use client";

import React, { useState } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  LogOut,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Phone,
  RefreshCw
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; loggedIn: boolean; email?: string } | null;
  bookingCount?: number;
  onLoginSuccess: (user: { name: string; loggedIn: boolean; email: string }) => void;
  onLogout: () => void;
  onOpenBookings?: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  currentUser,
  bookingCount = 0,
  onLoginSuccess,
  onLogout,
  onOpenBookings
}: AuthModalProps) {
  if (!isOpen) return null;

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("garvit@travelgo.in");
  const [name, setName] = useState("Garvit Surya");
  const [password, setPassword] = useState("••••••••");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [forceSwitchAccount, setForceSwitchAccount] = useState(false);

  const isUserLoggedIn = currentUser?.loggedIn && !forceSwitchAccount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: mode,
          name: name || "Traveler",
          email,
          password,
          phone
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onLoginSuccess({
          name: data.user.name || name || "Traveler",
          email: data.user.email || email,
          loggedIn: true
        });
        setForceSwitchAccount(false);
        onClose();
      } else {
        setErrorMsg(data.message || "Failed to authenticate");
      }
    } catch {
      // Fallback
      onLoginSuccess({
        name: name || "Traveler",
        email,
        loggedIn: true
      });
      setForceSwitchAccount(false);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 space-y-5 relative text-slate-900 border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LOGGED IN USER PROFILE VIEW */}
        {isUserLoggedIn ? (
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-black mx-auto shadow-xl shadow-blue-500/25">
                {currentUser?.name ? currentUser.name[0].toUpperCase() : "G"}
              </div>

              <div>
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="text-xl font-black text-slate-900">{currentUser?.name || "Garvit Surya"}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase">
                    VIP PLUS
                  </span>
                </div>
                <p className="text-xs text-slate-500">{currentUser?.email || "garvit@travelgo.in"}</p>
              </div>
            </div>

            {/* Profile Statistics Card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Active Bookings</span>
                <span className="text-2xl font-black text-blue-600">{bookingCount}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Reward Coins</span>
                <span className="text-2xl font-black text-emerald-600">1,250 🪙</span>
              </div>
            </div>

            {/* Benefits Banner */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">TravelGo Zero-Fee Club Active</span>
                <span className="text-slate-600 text-[11px]">Enjoy ₹0 convenience fee on all flights &amp; hotels</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              {onOpenBookings && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenBookings();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-between shadow-lg shadow-blue-500/20 transition-all active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>View My Trips &amp; E-Tickets</span>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setForceSwitchAccount(true)}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Switch to Another Account</span>
              </button>

              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out from TravelGo</span>
              </button>
            </div>
          </div>
        ) : (
          /* LOGIN / SIGNUP FORM */
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-2">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                {mode === "login" ? "Welcome Back to TravelGo" : "Create TravelGo Account"}
              </h3>
              <p className="text-xs text-slate-500">
                {mode === "login"
                  ? "Access your saved bookings and exclusive deals"
                  : "Sign up to unlock instant discounts and zero fees"}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-600 border border-red-200 text-xs font-bold rounded-xl text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === "signup" && (
                <>
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

                  <div>
                    <label className="text-xs text-slate-700 font-bold block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold outline-none focus:border-blue-600"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </>
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
                disabled={loading}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all"
              >
                {loading ? "SAVING..." : mode === "login" ? "LOGIN TO TRAVELGO" : "CREATE ACCOUNT"}
              </button>
            </form>

            <div className="text-center text-xs text-slate-500 pt-1">
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
        )}
      </div>
    </div>
  );
}
