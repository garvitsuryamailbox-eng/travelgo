'use client';

import React, { useState } from 'react';
import { X, Mail, Phone, Lock, Sparkles, CheckCircle2, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: { name: string; email: string }) => void;
}

export default function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [authMethod, setAuthMethod] = useState<'mobile' | 'email'>('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMethod === 'mobile' && mobileNumber.length >= 10) {
      setOtpSent(true);
    } else if (authMethod === 'email' && email.includes('@')) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      if (onLoginSuccess) {
        onLoginSuccess({
          name: fullName || 'Aurelia Member',
          email: email || `${mobileNumber}@aureliatravel.com`,
        });
      }
      setIsSuccess(false);
      setOtpSent(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-sky-600 via-teal-600 to-teal-700 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>TravelGo Account (Demo)</span>
          </div>
          <h3 className="text-2xl font-black tracking-tight">
            {activeTab === 'login' ? 'Welcome Back Traveler' : 'Join TravelGo Club'}
          </h3>
          <p className="text-xs text-sky-100 mt-1">
            Unlock secret member fares, instant booking vouchers, and 0% cancellation charges.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Signed In Successfully!</h4>
              <p className="text-xs text-slate-500 mt-1">Accessing your member dashboard and trips...</p>
            </div>
          ) : (
            <>
              {/* Tab Switcher */}
              <div className="flex border-b border-slate-100 mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('login');
                    setOtpSent(false);
                  }}
                  className={`flex-1 pb-3 font-bold text-sm text-center border-b-2 transition-colors ${
                    activeTab === 'login'
                      ? 'border-sky-600 text-sky-600'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('register');
                    setOtpSent(false);
                  }}
                  className={`flex-1 pb-3 font-bold text-sm text-center border-b-2 transition-colors ${
                    activeTab === 'register'
                      ? 'border-sky-600 text-sky-600'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  {/* Method toggle */}
                  <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 mb-4">
                    <button
                      type="button"
                      onClick={() => setAuthMethod('mobile')}
                      className={`flex-1 py-2 rounded-lg transition-all ${
                        authMethod === 'mobile' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      Mobile OTP
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthMethod('email')}
                      className={`flex-1 py-2 rounded-lg transition-all ${
                        authMethod === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      Email Address
                    </button>
                  </div>

                  {activeTab === 'register' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Aditya Verma"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>
                  )}

                  {authMethod === 'mobile' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-3 rounded-xl bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700">
                          +91
                        </span>
                        <div className="relative flex-1">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                            placeholder="Enter 10-digit mobile number"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-sky-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email ID</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-sky-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-3 text-[11px] font-semibold text-slate-400 uppercase">Or Continue With</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(true);
                      setTimeout(() => {
                        if (onLoginSuccess) {
                          onLoginSuccess({ name: 'Google User', email: 'user@gmail.com' });
                        }
                        setIsSuccess(false);
                        onClose();
                      }, 1000);
                    }}
                    className="w-full py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2.5 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Continue with Google (Demo)</span>
                  </button>
                </form>
              ) : (
                /* OTP Verification form */
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-800 flex items-center justify-between">
                    <span>Code sent to <strong>{authMethod === 'mobile' ? `+91 ${mobileNumber}` : email}</strong></span>
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="text-sky-600 font-bold underline"
                    >
                      Change
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Enter 4-Digit Demo Code</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        maxLength={4}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Any 4 digits (e.g. 1234)"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-center tracking-widest outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Verify & Continue</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </form>
              )}
            </>
          )}

          <p className="text-[10px] text-slate-400 text-center mt-4">
            By continuing, you agree to TravelGo’s Terms of Service & Privacy Policy. Demo portfolio project.
          </p>
        </div>
      </div>
    </div>
  );
}
