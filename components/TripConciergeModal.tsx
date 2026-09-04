"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Send,
  Bot,
  User,
  ArrowRight,
  Compass,
  CheckCircle2,
  Building2,
  Plane,
  Car
} from "lucide-react";

interface TripConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerSearch: (type: "hotels" | "cabs" | "flights", city: string) => void;
  onOpenWiki: (destId?: string) => void;
}

export default function TripConciergeModal({
  isOpen,
  onClose,
  onTriggerSearch,
  onOpenWiki
}: TripConciergeModalProps) {
  if (!isOpen) return null;

  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string; action?: { label: string; onClick: () => void } }[]
  >([
    {
      sender: "bot",
      text: "Hello! I am your AI Travel Concierge. I can help you find flights with zero fog delays, luxury stays near DLF CyberHub with verified quiet rooms, or guide you through Gurgaon's top hotspots.",
      action: {
        label: "Explore Gurgaon Millennium City Wiki",
        onClick: () => {
          onOpenWiki("gurgaon");
          onClose();
        }
      }
    }
  ]);

  const promptSuggestions = [
    "🏨 Best 5-star hotels near CyberHub Gurgaon?",
    "✈️ Flights to Delhi IGI with lowest fog delay risk?",
    "🚖 How to reach CyberHub from IGI Airport in 15 mins?",
    "🍽️ Best craft breweries in Sector 29 Gurgaon?"
  ];

  const handleSend = (text: string) => {
    const q = text.trim();
    if (!q) return;

    const newMsgs = [...messages, { sender: "user" as const, text: q }];
    setMessages(newMsgs);
    setInputQuery("");

    setTimeout(() => {
      let botReply = "";
      let actionObj: any = undefined;

      if (q.toLowerCase().includes("hotel") || q.toLowerCase().includes("cyberhub") || q.toLowerCase().includes("stay")) {
        botReply = "For CyberHub and Golf Course Road, I recommend The Oberoi Gurgaon (Olympic pool & 9.9/10 soundproofing) or The Leela Ambience (adjacent to Ambience Mall with direct flyover to Cyber City).";
        actionObj = {
          label: "View CyberHub Hotels & Prices",
          onClick: () => {
            onTriggerSearch("hotels", "Gurgaon DLF Cyber City");
            onClose();
          }
        };
      } else if (q.toLowerCase().includes("flight") || q.toLowerCase().includes("fog") || q.toLowerCase().includes("delhi")) {
        botReply = "IndiGo 6E-2054 (06:15 AM) and Air India AI-806 (17:30 PM) have a 98% on-time record arriving at Terminal 3 with DigiYatra fast lanes enabled.";
        actionObj = {
          label: "Search Delhi/Gurgaon Flights",
          onClick: () => {
            onTriggerSearch("flights", "New Delhi / Gurgaon NCR");
            onClose();
          }
        };
      } else if (q.toLowerCase().includes("cab") || q.toLowerCase().includes("airport")) {
        botReply = "You can take our guaranteed Sedan or Innova Crysta via the Dwarka Expressway. Driver is assigned instantly with a ₹500 zero-cancellation guarantee.";
        actionObj = {
          label: "Book Guaranteed Airport Cab",
          onClick: () => {
            onTriggerSearch("cabs", "IGI Airport to CyberHub");
            onClose();
          }
        };
      } else {
        botReply = "Gurgaon (Gurugram) is known as the Millennium City. Check out our detailed Wikipedia guide covering the legend of Guru Dronacharya, Sector 29 breweries, Sultanpur Bird Sanctuary, and Rapid Metro!";
        actionObj = {
          label: "Open Gurgaon Wiki Guide",
          onClick: () => {
            onOpenWiki("gurgaon");
            onClose();
          }
        };
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply, action: actionObj }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-xl h-[600px] flex flex-col shadow-2xl animate-in zoom-in-95 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>AI Travel Concierge & Trip Copilot</span>
                <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold">
                  BETA
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Ask anything about flights, hotels, traffic, or destination guides</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {m.sender === "bot" && (
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className="max-w-[80%] space-y-2">
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-950 border border-slate-800 text-slate-200"
                  }`}
                >
                  {m.text}
                </div>

                {m.action && (
                  <button
                    onClick={m.action.onClick}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold transition-colors"
                  >
                    <span>{m.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {m.sender === "user" && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Prompt Suggestions */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/60 overflow-x-auto flex gap-2 no-scrollbar">
          {promptSuggestions.map((ps, i) => (
            <button
              key={i}
              onClick={() => handleSend(ps)}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-[10px] font-medium whitespace-nowrap transition-colors"
            >
              {ps}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend(inputQuery);
            }}
            placeholder="Ask about flights, CyberHub stays, or airport transit..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-blue-500"
          />
          <button
            onClick={() => handleSend(inputQuery)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center justify-center"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
