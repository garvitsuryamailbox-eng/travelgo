"use client";

import React from "react";
import {
  Compass, ShieldCheck, Lock, Zap, Globe,
  ExternalLink, Mail, Phone, ArrowUpRight, Share2,
} from "lucide-react";

interface FooterProps {
  onOpenWiki: (destId?: string) => void;
  onSetTab: (tab: string) => void;
}

export default function Footer({ onOpenWiki, onSetTab }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#020d28", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* ── TOP VALUE STRIP ── */}
      <div style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Transparent Pricing",
                desc: "Full breakdown before checkout. Zero hidden fees.",
                color: "#0057e4",
              },
              {
                icon: Lock,
                title: "Secure & Private",
                desc: "Your data is encrypted. Payments are demo-only.",
                color: "#059669",
              },
              {
                icon: Zap,
                title: "Portfolio Demo",
                desc: "Built for showcase. No real bookings are processed.",
                color: "#f59e0b",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: item.color + "18", border: `1px solid ${item.color}28` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER LINKS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="flex items-center gap-2.5 mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                Travel<span className="text-sky-400">go</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-[220px]">
              India&apos;s transparent travel planning prototype. Compare full trip costs before you commit.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {["GH", "LI", "TW", "IG"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 text-slate-400 hover:text-white text-[10px] font-black"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-500 mb-5">City Guides</h4>
            <ul className="space-y-3">
              {[
                { id: "delhi",   label: "New Delhi & Aerocity" },
                { id: "goa",     label: "Goa Beaches & Villas" },
                { id: "jaipur",  label: "Jaipur Pink City" },
                { id: "gurgaon", label: "Gurgaon Cyber City" },
              ].map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => onOpenWiki(d.id)}
                    className="group flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{d.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { tab: "flights",  label: "Domestic Flights" },
                { tab: "hotels",   label: "5★ Hotels & Stays" },
                { tab: "trains",   label: "Vande Bharat Trains" },
                { tab: "cabs",     label: "Airport Transfers" },
                { tab: "packages", label: "Holiday Packages" },
              ].map((s) => (
                <li key={s.tab}>
                  <button
                    onClick={() => onSetTab(s.tab)}
                    className="group flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Security */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-500 mb-5">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>support@travelgo.in</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>1800-102-8747</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>travelgo.vercel.app</span>
              </li>
            </ul>

            {/* Payment Badges */}
            <div className="pt-4 border-t border-white/8">
              <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-2.5">Accepted Payments</div>
              <div className="flex flex-wrap gap-1.5">
                {["UPI", "GPay", "RuPay", "Visa", "MC"].map((m) => (
                  <span
                    key={m}
                    className="px-2 py-0.5 rounded-lg text-[9px] font-black text-slate-300"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500">
            © 2026 TravelGo &mdash; Portfolio Prototype by{" "}
            <span className="text-slate-400 font-semibold">Garvit Surya</span>
          </div>

          <div
            className="px-3 py-1.5 rounded-xl text-[10px] font-bold text-amber-400"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)" }}
          >
            ⚠️ Demo only · No real payments processed
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
