"use client";

import React from "react";
import { Search, Compass, Ticket, Tag, User } from "lucide-react";

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  bookingCount: number;
  onOpenBookings: () => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
}

const NAV_ITEMS = [
  { id: "search",  label: "Explore",  Icon: Search,  action: "navigate" },
  { id: "guides",  label: "Guides",   Icon: Compass,  action: "navigate" },
  { id: "trips",   label: "My Trips", Icon: Ticket,  action: "bookings" },
  { id: "offers",  label: "Offers",   Icon: Tag,     action: "navigate" },
  { id: "account", label: "Profile",  Icon: User,    action: "auth" },
] as const;

export default function MobileBottomNav({
  activeSection,
  onNavigate,
  bookingCount,
  onOpenBookings,
  onOpenAuth,
  isLoggedIn,
}: MobileBottomNavProps) {
  const handleTap = (id: string, action: string) => {
    if (action === "bookings") { onOpenBookings(); return; }
    if (action === "auth")     { onOpenAuth();     return; }
    onNavigate(id);
    const scrollMap: Record<string, string> = {
      search: "booking-search-widget",
      guides: "city-guides-hub",
      offers: "offers-banner-section",
    };
    const el = document.getElementById(scrollMap[id] ?? "");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderTop: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.10)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="grid grid-cols-5 items-stretch max-w-md mx-auto">
        {NAV_ITEMS.map(({ id, label, Icon, action }) => {
          const isActive = id === activeSection || (id === "trips" && false);
          const isTripBtn = id === "trips";
          const isProfile = id === "account";
          const activeColor = "#0057e4";

          return (
            <button
              key={id}
              type="button"
              onClick={() => handleTap(id, action)}
              className="relative flex flex-col items-center justify-center py-2.5 px-1 gap-1 transition-all duration-200 cursor-pointer"
              style={{ minHeight: "60px" }}
            >
              {/* Active indicator line */}
              {isActive && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-b-full"
                  style={{ background: activeColor }}
                />
              )}

              {/* Icon container */}
              <div className="relative">
                <div
                  className="w-9 h-9 rounded-2xl flex items-center justify-center transition-all duration-200"
                  style={isActive ? {
                    background: `rgba(0,87,228,0.1)`,
                    transform: "scale(1.05)",
                  } : isTripBtn ? {
                    background: "linear-gradient(135deg, #0057e4, #0284c7)",
                    boxShadow: "0 4px 14px rgba(0,87,228,0.35)",
                  } : {}}
                >
                  <Icon
                    className="w-5 h-5 transition-colors"
                    style={{
                      color: isTripBtn
                        ? "white"
                        : isActive
                          ? activeColor
                          : (isProfile && isLoggedIn)
                            ? activeColor
                            : "#94a3b8",
                    }}
                  />
                </div>

                {/* Badge for My Trips */}
                {isTripBtn && bookingCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center text-[9px] font-black text-white border-2 border-white"
                    style={{ background: "#e8323a", boxShadow: "0 2px 8px rgba(232,50,58,0.4)" }}
                  >
                    {bookingCount > 9 ? "9+" : bookingCount}
                  </span>
                )}

                {/* Online dot for profile */}
                {isProfile && isLoggedIn && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                )}
              </div>

              {/* Label */}
              <span
                className="text-[9px] font-bold tracking-tight transition-colors"
                style={{
                  color: isTripBtn
                    ? activeColor
                    : isActive
                      ? activeColor
                      : "#94a3b8",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
