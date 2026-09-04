export interface OfferItem {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  category: "ALL" | "FLIGHTS" | "HOTELS" | "CABS" | "PACKAGES";
  validTill: string;
  badge: string;
  gradient: string;
}

export const OFFERS_DATA: OfferItem[] = [
  {
    id: "off-1",
    code: "TRAVELGO500",
    title: "Flat ₹500 OFF on Domestic Flights & Stays",
    description: "Use code TRAVELGO500 on all flights and hotel bookings across India.",
    discount: "₹500 OFF",
    category: "ALL",
    validTill: "Valid till 31 Dec 2026",
    badge: "INSTANT CODE",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: "off-2",
    code: "GURGAONWIKI",
    title: "Special Cyber City Staycation Deal: Up to 25% OFF",
    description: "Book luxury 5-star hotels in Gurgaon & Delhi NCR with free breakfast and room upgrade.",
    discount: "25% OFF",
    category: "HOTELS",
    validTill: "Exclusive for Wiki Readers",
    badge: "POPULAR",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "off-3",
    code: "HDFCFLY",
    title: "HDFC Bank Cards: Flat 12% Instant Cashback",
    description: "Get up to ₹2,500 instant discount on Credit and Debit Card EMI transactions.",
    discount: "12% CASHBACK",
    category: "FLIGHTS",
    validTill: "Every Tuesday & Saturday",
    badge: "BANK OFFER",
    gradient: "from-emerald-600 to-teal-700"
  },
  {
    id: "off-4",
    code: "CABGO150",
    title: "Airport Transfer Special: Flat ₹150 OFF Cabs",
    description: "Stress-free airport pickups and drop-offs to IGI Airport & Cyber City.",
    discount: "₹150 OFF",
    category: "CABS",
    validTill: "No minimum booking",
    badge: "AIRPORT CAB",
    gradient: "from-amber-500 to-orange-600"
  }
];
