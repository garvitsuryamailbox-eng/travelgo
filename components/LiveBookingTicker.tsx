'use client';

import React, { useState, useEffect } from 'react';
import { Plane, Building2, Train, Package, Car, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface LiveActivity {
  id: string;
  user: string;
  city: string;
  action: string;
  destination: string;
  timeAgo: string;
  type: 'flight' | 'hotel' | 'train' | 'package';
}

const ACTIVITIES: LiveActivity[] = [
  {
    id: '1',
    user: 'Priya Sharma',
    city: 'Bangalore',
    action: 'just booked',
    destination: 'Taj Exotica Resort & Spa, Goa',
    timeAgo: '2 mins ago',
    type: 'hotel',
  },
  {
    id: '2',
    user: 'Aarav Verma',
    city: 'Delhi',
    action: 'booked IndiGo Flight',
    destination: 'Delhi (DEL) → Mumbai (BOM)',
    timeAgo: '4 mins ago',
    type: 'flight',
  },
  {
    id: '3',
    user: 'Rohan Mehra',
    city: 'Mumbai',
    action: 'booked Vande Bharat Express',
    destination: 'New Delhi → Varanasi (BSB)',
    timeAgo: '6 mins ago',
    type: 'train',
  },
  {
    id: '4',
    user: 'Ananya Iyer',
    city: 'Hyderabad',
    action: 'reserved 6-Day Holiday',
    destination: 'Kashmir Houseboat & Gondola Tour',
    timeAgo: '8 mins ago',
    type: 'package',
  },
  {
    id: '5',
    user: 'Vikram Singh',
    city: 'Pune',
    action: 'booked Outstation Cab',
    destination: 'Pune → Lonavala Resort',
    timeAgo: '11 mins ago',
    type: 'flight',
  },
];

export default function LiveBookingTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    // Loop through activities every 9 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 600);
    }, 8500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = ACTIVITIES[currentIndex];

  const getIcon = () => {
    switch (current.type) {
      case 'flight':
        return <Plane className="w-4 h-4 text-sky-500" />;
      case 'hotel':
        return <Building2 className="w-4 h-4 text-teal-500" />;
      case 'train':
        return <Train className="w-4 h-4 text-amber-500" />;
      case 'package':
        return <Package className="w-4 h-4 text-rose-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    }
  };

  return (
    <aside
      aria-label="Live booking notification"
      className="fixed bottom-5 left-5 z-40 max-w-sm hidden sm:flex items-center gap-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 text-slate-800 animate-in slide-in-from-bottom-5 duration-500"
    >
      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
        {getIcon()}
      </div>

      <div className="min-w-0 flex-1 text-xs">
        <p className="font-semibold text-slate-900 leading-snug truncate">
          <span className="font-bold">{current.user}</span> ({current.city}) {current.action}
        </p>
        <p className="text-sky-700 font-bold text-[11px] truncate">
          {current.destination}
        </p>
        <span className="text-[10px] text-slate-400 font-medium">
          Verified Booking · {current.timeAgo}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
