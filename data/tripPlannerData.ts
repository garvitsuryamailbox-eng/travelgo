// ─────────────────────────────────────────────────────────────────────────────
// TravelGo — Trip Planner Mock Data
// ALL prices are DEMO/SAMPLE estimates. No real bookings or APIs involved.
// ─────────────────────────────────────────────────────────────────────────────

export type TravelStyle =
  | "Relaxed"
  | "Adventure"
  | "Luxury"
  | "Family"
  | "Budget"
  | "Romantic"
  | "Solo";

export type BudgetTier = "10K" | "20K" | "30K" | "50K+";

// ─── Budget-tier destination cards ───────────────────────────────────────────

export interface BudgetDestination {
  id: string;
  name: string;
  state: string;
  image: string;
  budgetTier: BudgetTier;
  estimatedTotal: number; // INR, demo
  days: number;
  styles: TravelStyle[];
  tagline: string;
  highlights: string[];
  fromCity: string; // default departure city for this estimate
}

export const BUDGET_DESTINATIONS: BudgetDestination[] = [
  // ₹10K tier
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    budgetTier: "10K",
    estimatedTotal: 8500,
    days: 3,
    styles: ["Adventure", "Budget", "Solo"],
    tagline: "Yoga, white-water rafting & Himalayan air",
    highlights: ["River Rafting", "Laxman Jhula", "Beatles Ashram", "Triveni Ghat Aarti"],
    fromCity: "Delhi"
  },
  {
    id: "haridwar",
    name: "Haridwar",
    state: "Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    budgetTier: "10K",
    estimatedTotal: 6800,
    days: 2,
    styles: ["Relaxed", "Family", "Budget"],
    tagline: "Sacred ghats & evening Ganga Aarti",
    highlights: ["Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi", "Rajaji National Park"],
    fromCity: "Delhi"
  },
  {
    id: "pushkar",
    name: "Pushkar",
    state: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    budgetTier: "10K",
    estimatedTotal: 9200,
    days: 3,
    styles: ["Relaxed", "Solo", "Budget"],
    tagline: "Holy lake, camel fairs & desert calm",
    highlights: ["Pushkar Lake", "Brahma Temple", "Camel Safari", "Street Food"],
    fromCity: "Jaipur"
  },
  {
    id: "mcleodganj",
    name: "McLeod Ganj",
    state: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1592375338650-77b0a15bb57d?auto=format&fit=crop&w=800&q=80",
    budgetTier: "10K",
    estimatedTotal: 9800,
    days: 3,
    styles: ["Solo", "Budget", "Adventure"],
    tagline: "Tibetan culture & Dhauladhar mountains",
    highlights: ["Namgyal Monastery", "Triund Trek", "Bhagsu Falls", "Tibetan Market"],
    fromCity: "Delhi"
  },

  // ₹20K tier
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    budgetTier: "20K",
    estimatedTotal: 17500,
    days: 4,
    styles: ["Relaxed", "Romantic", "Solo", "Family"],
    tagline: "Golden beaches, seafood & sunset vibes",
    highlights: ["Baga Beach", "Dudhsagar Falls", "Old Goa Churches", "Spice Plantation"],
    fromCity: "Mumbai"
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    budgetTier: "20K",
    estimatedTotal: 18750,
    days: 4,
    styles: ["Adventure", "Romantic", "Solo"],
    tagline: "Snow peaks, valleys & adventure sports",
    highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali"],
    fromCity: "Delhi"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=800&q=80",
    budgetTier: "20K",
    estimatedTotal: 14900,
    days: 3,
    styles: ["Family", "Relaxed", "Romantic"],
    tagline: "Pink City palaces, havelis & royal cuisine",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jal Mahal"],
    fromCity: "Delhi"
  },
  {
    id: "coorg",
    name: "Coorg",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    budgetTier: "20K",
    estimatedTotal: 19200,
    days: 4,
    styles: ["Relaxed", "Romantic", "Family"],
    tagline: "Coffee estates, waterfalls & misty hills",
    highlights: ["Abbey Falls", "Namdroling Monastery", "Raja's Seat", "Coffee Plantation Tour"],
    fromCity: "Bangalore"
  },

  // ₹30K tier
  {
    id: "ladakh",
    name: "Leh–Ladakh",
    state: "Ladakh UT",
    image:
      "https://images.unsplash.com/photo-1564524985564-b9b4b6b36c4a?auto=format&fit=crop&w=800&q=80",
    budgetTier: "30K",
    estimatedTotal: 28500,
    days: 6,
    styles: ["Adventure", "Solo", "Romantic"],
    tagline: "High-altitude desert, monasteries & Pangong Lake",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Thiksey Monastery"],
    fromCity: "Delhi"
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    state: "Andaman & Nicobar",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
    budgetTier: "30K",
    estimatedTotal: 26800,
    days: 5,
    styles: ["Romantic", "Family", "Relaxed"],
    tagline: "Crystal water, coral reefs & pristine beaches",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Cellular Jail", "Elephant Beach"],
    fromCity: "Chennai"
  },
  {
    id: "kerala",
    name: "Munnar & Alleppey",
    state: "Kerala",
    image:
      "https://images.unsplash.com/photo-1545450657-5005571d91f4?auto=format&fit=crop&w=800&q=80",
    budgetTier: "30K",
    estimatedTotal: 23500,
    days: 5,
    styles: ["Romantic", "Relaxed", "Family", "Luxury"],
    tagline: "Tea gardens, backwaters & houseboat serenity",
    highlights: ["Tea Plantations", "Alleppey Houseboat", "Periyar Wildlife", "Athirapally Falls"],
    fromCity: "Mumbai"
  },
  {
    id: "rajasthan-circuit",
    name: "Rajasthan Circuit",
    state: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
    budgetTier: "30K",
    estimatedTotal: 27200,
    days: 6,
    styles: ["Family", "Romantic", "Luxury"],
    tagline: "Jaipur–Jodhpur–Udaipur royal trail",
    highlights: ["City Palace Udaipur", "Mehrangarh Fort", "Lake Pichola", "Osian Desert"],
    fromCity: "Delhi"
  },

  // ₹50K+ tier
  {
    id: "maldives",
    name: "Maldives",
    state: "International",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    budgetTier: "50K+",
    estimatedTotal: 68000,
    days: 5,
    styles: ["Luxury", "Romantic"],
    tagline: "Overwater bungalows & turquoise lagoons",
    highlights: ["Water Villas", "Snorkelling", "Sunset Cruise", "Spa Treatments"],
    fromCity: "Mumbai"
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    state: "International",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    budgetTier: "50K+",
    estimatedTotal: 54000,
    days: 6,
    styles: ["Luxury", "Romantic", "Adventure", "Solo"],
    tagline: "Temples, terraced rice fields & beach clubs",
    highlights: ["Ubud Rice Terraces", "Tanah Lot", "Seminyak Beach Clubs", "Mount Batur Hike"],
    fromCity: "Mumbai"
  },
  {
    id: "kashmir",
    name: "Kashmir Valley",
    state: "Jammu & Kashmir",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    budgetTier: "50K+",
    estimatedTotal: 42000,
    days: 6,
    styles: ["Luxury", "Romantic", "Family"],
    tagline: "Dal Lake houseboats, Gulmarg snow & Pahalgam meadows",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Mughal Gardens"],
    fromCity: "Delhi"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    state: "International",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    budgetTier: "50K+",
    estimatedTotal: 145000,
    days: 7,
    styles: ["Luxury", "Romantic", "Family"],
    tagline: "Alps, chocolate, cheese & fairytale villages",
    highlights: ["Interlaken", "Jungfraujoch", "Lucerne Chapel Bridge", "Zermatt & Matterhorn"],
    fromCity: "Mumbai"
  }
];

// ─── Complete Trip Ideas (with full breakdown) ────────────────────────────────

export interface CompleteTripBreakdown {
  flight: number;
  hotel: number;
  transfers: number;
  activities: number;
  food: number;
}

export interface CompleteTripIdea {
  id: string;
  title: string;
  destination: string;
  state: string;
  duration: string;
  durationDays: number;
  image: string;
  travelStyle: TravelStyle;
  tag: string;
  tagColor: string; // Tailwind bg class
  breakdown: CompleteTripBreakdown;
  estimatedTotal: number;
  perPerson: boolean; // true = per person
  itinerarySummary: string[];
  bestFor: string;
  fromCity: string;
}

export const COMPLETE_TRIP_IDEAS: CompleteTripIdea[] = [
  {
    id: "goa-5d",
    title: "Goa Beach Escape",
    destination: "Goa",
    state: "Goa",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Relaxed",
    tag: "Beach Getaway",
    tagColor: "bg-cyan-500",
    breakdown: {
      flight: 7200,
      hotel: 6400,
      transfers: 1500,
      activities: 3250,
      food: 4500
    },
    estimatedTotal: 22850,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive Goa, check in, evening at Baga Beach",
      "Day 2: North Goa — Calangute, Anjuna Flea Market",
      "Day 3: Dudhsagar Falls day trip & spice plantation",
      "Day 4: South Goa — Palolem, Cola Beach",
      "Day 5: Old Goa churches, depart"
    ],
    bestFor: "Couples & friends",
    fromCity: "Mumbai"
  },
  {
    id: "manali-4d",
    title: "Manali Adventure",
    destination: "Manali",
    state: "Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Adventure",
    tag: "Snow & Mountains",
    tagColor: "bg-blue-500",
    breakdown: {
      flight: 5800,
      hotel: 4200,
      transfers: 2800,
      activities: 4500,
      food: 2800
    },
    estimatedTotal: 20100,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive Kullu airport, drive to Manali, local market",
      "Day 2: Rohtang Pass / Solang Valley snow activities",
      "Day 3: Hadimba Temple, Old Manali, Vashisht hot springs",
      "Day 4: Paragliding, depart afternoon"
    ],
    bestFor: "Adventure seekers & couples",
    fromCity: "Delhi"
  },
  {
    id: "jaipur-3d",
    title: "Jaipur Royal Circuit",
    destination: "Jaipur",
    state: "Rajasthan",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    image:
      "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Family",
    tag: "Heritage & Culture",
    tagColor: "bg-amber-500",
    breakdown: {
      flight: 4200,
      hotel: 3800,
      transfers: 1200,
      activities: 2400,
      food: 2000
    },
    estimatedTotal: 13600,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive, Hawa Mahal, local bazaars, dinner at Chokhi Dhani",
      "Day 2: Amber Fort elephant ride, City Palace, Jantar Mantar",
      "Day 3: Jal Mahal photo stop, Albert Hall Museum, depart"
    ],
    bestFor: "Families & culture lovers",
    fromCity: "Delhi"
  },
  {
    id: "andaman-6d",
    title: "Andaman Island Hopper",
    destination: "Andaman Islands",
    state: "A&N Islands",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Romantic",
    tag: "Beach & Diving",
    tagColor: "bg-teal-500",
    breakdown: {
      flight: 12000,
      hotel: 9500,
      transfers: 3200,
      activities: 6500,
      food: 4800
    },
    estimatedTotal: 36000,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive Port Blair, Cellular Jail sound & light show",
      "Day 2: Neil Island — Bharatpur Beach, snorkelling",
      "Day 3: Havelock — Radhanagar Beach (Asia's best beach)",
      "Day 4: Elephant Beach scuba diving",
      "Day 5: Baratang — Limestone caves & mangrove creek",
      "Day 6: Ross Island, depart"
    ],
    bestFor: "Couples & honeymooners",
    fromCity: "Chennai"
  },
  {
    id: "ladakh-7d",
    title: "Ladakh Expedition",
    destination: "Leh–Ladakh",
    state: "Ladakh UT",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    image:
      "https://images.unsplash.com/photo-1564524985564-b9b4b6b36c4a?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Adventure",
    tag: "High Altitude",
    tagColor: "bg-indigo-500",
    breakdown: {
      flight: 9800,
      hotel: 7200,
      transfers: 5500,
      activities: 5800,
      food: 3500
    },
    estimatedTotal: 31800,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive Leh, acclimatisation, local market",
      "Day 2: Shanti Stupa, Leh Palace, Namgyal Tsemo",
      "Day 3: Nubra Valley via Khardung La (world's highest motorable pass)",
      "Day 4: Diskit Monastery & camel safari in Hunder dunes",
      "Day 5: Pangong Lake (3 Idiots location) — 134km blue lake",
      "Day 6: Hemis Festival, Thiksey Monastery",
      "Day 7: Departure"
    ],
    bestFor: "Solo travellers & adventurers",
    fromCity: "Delhi"
  },
  {
    id: "kerala-5d",
    title: "Kerala Backwater Bliss",
    destination: "Munnar & Alleppey",
    state: "Kerala",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    image:
      "https://images.unsplash.com/photo-1545450657-5005571d91f4?auto=format&fit=crop&w=800&q=80",
    travelStyle: "Relaxed",
    tag: "Nature & Wellness",
    tagColor: "bg-green-600",
    breakdown: {
      flight: 6200,
      hotel: 7800,
      transfers: 2500,
      activities: 3500,
      food: 3200
    },
    estimatedTotal: 23200,
    perPerson: true,
    itinerarySummary: [
      "Day 1: Arrive Kochi, Fort Kochi Chinese fishing nets & street art",
      "Day 2: Drive to Munnar — tea gardens, Mattupetty Dam",
      "Day 3: Periyar Wildlife Sanctuary boat safari",
      "Day 4: Drive to Alleppey — overnight houseboat on backwaters",
      "Day 5: Vembanad Lake sunrise, depart"
    ],
    bestFor: "Couples & wellness seekers",
    fromCity: "Mumbai"
  }
];

// ─── Surprise Me Pool ─────────────────────────────────────────────────────────

export interface SurpriseDestination {
  id: string;
  name: string;
  state: string;
  image: string;
  description: string;
  estimatedTotal: number;
  days: number;
  styles: TravelStyle[];
  budgetTiers: BudgetTier[];
  whyItFits: string[];
  fromCity: string;
}

export const SURPRISE_ME_POOL: SurpriseDestination[] = [
  {
    id: "spiti",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1592375338650-77b0a15bb57d?auto=format&fit=crop&w=800&q=80",
    description: "The 'Middle Land' — barren plateaus, ancient monasteries, and starry skies at 4,270m",
    estimatedTotal: 24000,
    days: 6,
    styles: ["Adventure", "Solo"],
    budgetTiers: ["20K", "30K"],
    whyItFits: [
      "Truly off-the-beaten-path experience",
      "Stargazing in one of India's darkest skies",
      "Ancient Key Monastery dating to 11th century",
      "Budget-friendly with local homestays"
    ],
    fromCity: "Delhi"
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
    description: "UNESCO World Heritage ruins of the Vijayanagara Empire spread over a boulder landscape",
    estimatedTotal: 12000,
    days: 3,
    styles: ["Budget", "Solo", "Relaxed"],
    budgetTiers: ["10K", "20K"],
    whyItFits: [
      "UNESCO Heritage site most people haven't visited",
      "Surreal boulder-strewn landscape unlike anywhere in India",
      "Budget-friendly with excellent local food",
      "Unique sunrise from Matanga Hill"
    ],
    fromCity: "Bangalore"
  },
  {
    id: "ziro",
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    description: "A UNESCO-nominated valley of the Apatani tribe with emerald paddy fields",
    estimatedTotal: 22000,
    days: 5,
    styles: ["Solo", "Adventure", "Relaxed"],
    budgetTiers: ["20K", "30K"],
    whyItFits: [
      "One of India's most underrated gems",
      "Living tribal culture of the Apatani people",
      "Ziro Music Festival (if timed right)",
      "Pristine forests with exceptional biodiversity"
    ],
    fromCity: "Delhi"
  },
  {
    id: "dhanushkodi",
    name: "Dhanushkodi",
    state: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    description: "A ghost town at the tip of Pamban Island — where the Bay of Bengal meets the Indian Ocean",
    estimatedTotal: 9500,
    days: 2,
    styles: ["Solo", "Budget", "Adventure"],
    budgetTiers: ["10K"],
    whyItFits: [
      "Hauntingly beautiful abandoned town",
      "Land's End of India — two seas meeting",
      "Experience Pamban Bridge — India's first sea bridge",
      "Minimal crowds, raw natural beauty"
    ],
    fromCity: "Chennai"
  },
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    description: "The world's largest river island, home to Vaishnavite satras and Mising tribal culture",
    estimatedTotal: 16000,
    days: 4,
    styles: ["Relaxed", "Solo", "Family"],
    budgetTiers: ["10K", "20K"],
    whyItFits: [
      "World's largest inhabited river island",
      "Living monasteries (satras) preserving 600-year-old culture",
      "Sunset over the Brahmaputra river",
      "Authentic Assamese tribal cuisine"
    ],
    fromCity: "Kolkata"
  },
  {
    id: "mawlynnong",
    name: "Mawlynnong",
    state: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "Asia's cleanest village — a fairytale hamlet with living root bridges",
    estimatedTotal: 18500,
    days: 4,
    styles: ["Family", "Relaxed", "Romantic"],
    budgetTiers: ["10K", "20K"],
    whyItFits: [
      "Officially Asia's cleanest village",
      "Living root bridges — 500-year-old bio-engineering",
      "Viewpoint overlooking Bangladesh",
      "Cherrapunji's famous waterfalls nearby"
    ],
    fromCity: "Kolkata"
  }
];

// ─── Deterministic Surprise Me Selector ──────────────────────────────────────

/**
 * Picks a surprise destination from SURPRISE_ME_POOL based on user inputs.
 * Deterministic — same inputs always give same destination.
 * No AI or random — pure frontend logic.
 */
export function getSurpriseDestination(
  budgetTier: BudgetTier,
  durationDays: number,
  style: TravelStyle
): SurpriseDestination {
  // 1. Filter by matching style and budget
  let candidates = SURPRISE_ME_POOL.filter(
    (d) =>
      d.styles.includes(style) &&
      d.budgetTiers.includes(budgetTier) &&
      d.days <= durationDays + 1
  );

  // 2. Fallback: just match budget if no style match
  if (candidates.length === 0) {
    candidates = SURPRISE_ME_POOL.filter((d) => d.budgetTiers.includes(budgetTier));
  }

  // 3. Fallback: any destination
  if (candidates.length === 0) {
    candidates = SURPRISE_ME_POOL;
  }

  // 4. Deterministic pick using hash of inputs
  const hash = (style.length + durationDays * 3 + (budgetTier === "10K" ? 1 : budgetTier === "20K" ? 2 : budgetTier === "30K" ? 3 : 4)) % candidates.length;
  return candidates[hash];
}

// ─── Travel Styles Config ─────────────────────────────────────────────────────

export const TRAVEL_STYLES: { id: TravelStyle; emoji: string; desc: string }[] = [
  { id: "Relaxed", emoji: "🌴", desc: "Slow-paced, scenic, stress-free" },
  { id: "Adventure", emoji: "🧗", desc: "Trekking, sports, thrills" },
  { id: "Luxury", emoji: "💎", desc: "5-star stays, fine dining" },
  { id: "Family", emoji: "👨‍👩‍👧", desc: "Kid-friendly, safe, fun" },
  { id: "Budget", emoji: "💰", desc: "Best value, hostels & local eats" },
  { id: "Romantic", emoji: "💑", desc: "Couples, honeymoons, sunsets" },
  { id: "Solo", emoji: "🎒", desc: "Independent, flexible, adventurous" }
];

// ─── Budget Tier Config ───────────────────────────────────────────────────────

export const BUDGET_TIER_CONFIG: {
  id: BudgetTier;
  label: string;
  maxINR: number;
  minINR: number;
  desc: string;
}[] = [
  { id: "10K", label: "Under ₹10K", minINR: 0, maxINR: 10000, desc: "Weekend escapes & road trips" },
  { id: "20K", label: "₹10K–20K", minINR: 10000, maxINR: 20000, desc: "Long weekends & 4-day trips" },
  { id: "30K", label: "₹20K–30K", minINR: 20000, maxINR: 30000, desc: "Week-long adventures" },
  { id: "50K+", label: "₹30K+", minINR: 30000, maxINR: 999999, desc: "International & luxury travel" }
];
