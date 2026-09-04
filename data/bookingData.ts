export interface FlightItem {
  id: string;
  airline: string;
  airlineCode: string;
  airlineLogo: string;
  flightNumber: string;
  fromCity: string;
  fromCode: string;
  fromAirport: string;
  toCity: string;
  toCode: string;
  toAirport: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  priceINR: number;
  availableSeats: number;
  refundable: boolean;
  cabinClass: "Economy" | "Premium Economy" | "Business";
  tags: string[];
  // Passenger Pain Point Solutions:
  terminal: string;
  onTimeRating: number; // e.g. 96%
  delayRisk: "Very Low" | "Low" | "Moderate (Morning Fog)";
  digiYatraEligible: boolean;
  baggageIncluded: string;
  convenienceFee: number; // ₹0 on TravelGo
}

export interface HotelItem {
  id: string;
  name: string;
  city: string;
  area: string;
  tagline: string;
  starRating: number;
  userRating: number;
  reviewCount: number;
  pricePerNightINR: number;
  originalPriceINR: number;
  image: string;
  gallery: string[];
  amenities: string[];
  distanceToKeySpot: string;
  featured: boolean;
  roomType: string;
  cancellationPolicy: string;
  // Passenger Pain Point Solutions:
  peakCommuteToCyberHub: string; // e.g. "8 mins via Golf Course Rd Underpass"
  distanceToMetro: string; // e.g. "300m to Rapid Metro"
  soundproofScore: string; // e.g. "9.8/10 Ultra Quiet"
  verifiedPhotosBadge: boolean;
  earlyCheckInAvailable: boolean;
}

export interface CabItem {
  id: string;
  category: "Sedan" | "SUV" | "Luxury" | "Electric EV";
  carModel: string;
  rating: number;
  tripsCount: number;
  basePriceINR: number;
  pricePerKmINR: number;
  capacity: number;
  luggageCapacity: string;
  features: string[];
  driverRating: number;
  image: string;
  // Passenger Pain Point Solutions:
  zeroCancellationAssurance: boolean;
  compensationOnCancelINR: number; // ₹500 compensation guarantee
  driverAssignedETA: string; // e.g. "Driver assigned within 2 mins of booking"
  tollIncluded: boolean;
}

export interface PackageItem {
  id: string;
  title: string;
  destination: string;
  duration: string;
  pricePerPersonINR: number;
  originalPriceINR: number;
  image: string;
  highlights: string[];
  inclusions: string[];
  rating: number;
  reviews: number;
  theme: "Luxury" | "Weekend Break" | "Culture & Heritage" | "Adventure" | "Spiritual";
  zeroHiddenFeeGuaranteed: boolean;
  dedicatedConcierge: boolean;
}

export interface CityOption {
  code: string;
  city: string;
  airport: string;
  country: string;
  popular?: boolean;
}

export const POPULAR_CITIES: CityOption[] = [
  { code: "DEL", city: "New Delhi / Gurgaon NCR", airport: "Indira Gandhi Intl Airport (T3/T1)", country: "India", popular: true },
  { code: "BOM", city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj Intl (T2)", country: "India", popular: true },
  { code: "BLR", city: "Bengaluru", airport: "Kempegowda Intl Airport (T2)", country: "India", popular: true },
  { code: "GOI", city: "Goa (Dabolim)", airport: "Dabolim Airport", country: "India", popular: true },
  { code: "GOX", city: "Goa (Mopa)", airport: "Manohar Intl Airport", country: "India", popular: true },
  { code: "JAI", city: "Jaipur", airport: "Jaipur International Airport", country: "India", popular: true },
  { code: "KUU", city: "Kullu Manali", airport: "Bhuntar Airport", country: "India", popular: true },
  { code: "DXB", city: "Dubai", airport: "Dubai International Airport (T3)", country: "United Arab Emirates", popular: true },
  { code: "SIN", city: "Singapore", airport: "Changi International Airport", country: "Singapore", popular: false },
  { code: "BKK", city: "Bangkok", airport: "Suvarnabhumi Airport", country: "Thailand", popular: false }
];

export const FLIGHTS_DATABASE: FlightItem[] = [
  {
    id: "fl-101",
    airline: "IndiGo",
    airlineCode: "6E",
    airlineLogo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80",
    flightNumber: "6E-2054",
    fromCity: "Mumbai",
    fromCode: "BOM",
    fromAirport: "Chhatrapati Shivaji Maharaj Intl (T2)",
    toCity: "New Delhi / Gurgaon NCR",
    toCode: "DEL",
    toAirport: "Indira Gandhi Intl (Terminal 3)",
    departureTime: "06:15",
    arrivalTime: "08:25",
    duration: "2h 10m",
    stops: "Non-stop",
    priceINR: 4850,
    availableSeats: 9,
    refundable: true,
    cabinClass: "Economy",
    tags: ["98% On-Time Record", "Fastest", "T3 Express Gate"],
    terminal: "Terminal 3 (DEL)",
    onTimeRating: 98,
    delayRisk: "Very Low",
    digiYatraEligible: true,
    baggageIncluded: "15 kg Check-in + 7 kg Cabin",
    convenienceFee: 0
  },
  {
    id: "fl-102",
    airline: "Air India Express",
    airlineCode: "IX",
    airlineLogo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80",
    flightNumber: "IX-884",
    fromCity: "Mumbai",
    fromCode: "BOM",
    fromAirport: "Chhatrapati Shivaji Maharaj Intl (T2)",
    toCity: "New Delhi / Gurgaon NCR",
    toCode: "DEL",
    toAirport: "Indira Gandhi Intl (Terminal 3)",
    departureTime: "09:40",
    arrivalTime: "11:55",
    duration: "2h 15m",
    stops: "Non-stop",
    priceINR: 4499,
    availableSeats: 5,
    refundable: false,
    cabinClass: "Economy",
    tags: ["Cheapest Upfront", "DigiYatra Enabled"],
    terminal: "Terminal 3 (DEL)",
    onTimeRating: 93,
    delayRisk: "Low",
    digiYatraEligible: true,
    baggageIncluded: "15 kg Check-in + 7 kg Cabin",
    convenienceFee: 0
  },
  {
    id: "fl-103",
    airline: "Air India",
    airlineCode: "AI",
    airlineLogo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=120&q=80",
    flightNumber: "AI-806",
    fromCity: "Mumbai",
    fromCode: "BOM",
    fromAirport: "Chhatrapati Shivaji Maharaj Intl (T2)",
    toCity: "New Delhi / Gurgaon NCR",
    toCode: "DEL",
    toAirport: "Indira Gandhi Intl (Terminal 3)",
    departureTime: "17:30",
    arrivalTime: "19:45",
    duration: "2h 15m",
    stops: "Non-stop",
    priceINR: 6200,
    availableSeats: 14,
    refundable: true,
    cabinClass: "Economy",
    tags: ["Hot Meal Included", "Free Seat Selection", "96% On-Time"],
    terminal: "Terminal 3 (DEL)",
    onTimeRating: 96,
    delayRisk: "Very Low",
    digiYatraEligible: true,
    baggageIncluded: "25 kg Check-in + 8 kg Cabin",
    convenienceFee: 0
  },
  {
    id: "fl-104",
    airline: "Air India (Business Club)",
    airlineCode: "AI",
    airlineLogo: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=120&q=80",
    flightNumber: "AI-860",
    fromCity: "Mumbai",
    fromCode: "BOM",
    fromAirport: "Chhatrapati Shivaji Maharaj Intl (T2)",
    toCity: "New Delhi / Gurgaon NCR",
    toCode: "DEL",
    toAirport: "Indira Gandhi Intl (Terminal 3)",
    departureTime: "19:00",
    arrivalTime: "21:15",
    duration: "2h 15m",
    stops: "Non-stop",
    priceINR: 19800,
    availableSeats: 4,
    refundable: true,
    cabinClass: "Business",
    tags: ["Lounge Access Included", "Priority Baggage & Boarding", "Zero Cancellation Penalty"],
    terminal: "Terminal 3 (DEL VIP Gates)",
    onTimeRating: 99,
    delayRisk: "Very Low",
    digiYatraEligible: true,
    baggageIncluded: "35 kg Check-in + 12 kg Cabin",
    convenienceFee: 0
  },
  {
    id: "fl-105",
    airline: "IndiGo",
    airlineCode: "6E",
    airlineLogo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80",
    flightNumber: "6E-512",
    fromCity: "Bengaluru",
    fromCode: "BLR",
    fromAirport: "Kempegowda Intl (Terminal 2)",
    toCity: "New Delhi / Gurgaon NCR",
    toCode: "DEL",
    toAirport: "Indira Gandhi Intl (Terminal 3)",
    departureTime: "07:10",
    arrivalTime: "09:50",
    duration: "2h 40m",
    stops: "Non-stop",
    priceINR: 5200,
    availableSeats: 12,
    refundable: true,
    cabinClass: "Economy",
    tags: ["97% On-Time Record", "Direct T3 Aerocity Shuttle"],
    terminal: "Terminal 3 (DEL)",
    onTimeRating: 97,
    delayRisk: "Low",
    digiYatraEligible: true,
    baggageIncluded: "15 kg Check-in + 7 kg Cabin",
    convenienceFee: 0
  },
  {
    id: "fl-106",
    airline: "Emirates",
    airlineCode: "EK",
    airlineLogo: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=120&q=80",
    flightNumber: "EK-511",
    fromCity: "New Delhi / Gurgaon NCR",
    fromCode: "DEL",
    fromAirport: "Indira Gandhi Intl (Terminal 3)",
    toCity: "Dubai",
    toCode: "DXB",
    toAirport: "Dubai Intl Airport (T3)",
    departureTime: "10:35",
    arrivalTime: "13:00",
    duration: "3h 55m",
    stops: "Non-stop",
    priceINR: 18450,
    availableSeats: 18,
    refundable: true,
    cabinClass: "Economy",
    tags: ["Free Wi-Fi Onboard", "World Class Gourmet Dining", "100% Refundable"],
    terminal: "Terminal 3 (DEL)",
    onTimeRating: 99,
    delayRisk: "Very Low",
    digiYatraEligible: true,
    baggageIncluded: "30 kg Check-in + 7 kg Cabin",
    convenienceFee: 0
  }
];

export const HOTELS_DATABASE: HotelItem[] = [
  {
    id: "ht-201",
    name: "The Oberoi, Gurgaon",
    city: "Gurgaon",
    area: "DLF Phase 5, Cyber City & Udyog Vihar",
    tagline: "Ultra-luxury sanctuary with Olympic pool & verified tranquil soundproofed rooms",
    starRating: 5,
    userRating: 4.9,
    reviewCount: 3840,
    pricePerNightINR: 16500,
    originalPriceINR: 22000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Free High-speed WiFi", "Infinity Pool", "24/7 Butler Service", "Cyber City View", "Spa & Wellness", "Valet Parking"],
    distanceToKeySpot: "2.1 km from DLF CyberHub | 15 mins to Airport",
    featured: true,
    roomType: "Luxury Premier Room with Forest View",
    cancellationPolicy: "100% Free cancellation up to 24 hrs",
    peakCommuteToCyberHub: "5 mins via Cyber City Underpass (Signal-Free)",
    distanceToMetro: "400m to IndusInd Bank Cyber City Rapid Metro",
    soundproofScore: "9.9/10 Whisper Quiet",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  },
  {
    id: "ht-202",
    name: "The Leela Ambience Gurugram Hotel & Residences",
    city: "Gurgaon",
    area: "Ambience Island, NH-48",
    tagline: "Gateway to Millennium City with direct private elevator into Ambience Mall",
    starRating: 5,
    userRating: 4.8,
    reviewCount: 5210,
    pricePerNightINR: 13999,
    originalPriceINR: 18500,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Direct Mall Access", "Award-winning Dining (Spectra)", "Heated Pool", "Luxury Spa", "Airport Shuttle"],
    distanceToKeySpot: "Next to DLF Cyber City & Ambience Mall | 10 mins to T3 Airport",
    featured: true,
    roomType: "Royal Club Suite with Lounge Access",
    cancellationPolicy: "100% Instant Refund Shield Available",
    peakCommuteToCyberHub: "3 mins direct private flyover",
    distanceToMetro: "600m to Micromax Moulsari Ave Rapid Metro",
    soundproofScore: "9.7/10 Triple Glazed Windows",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  },
  {
    id: "ht-203",
    name: "Taj City Centre Gurugram",
    city: "Gurgaon",
    area: "Sector 44, Millennium City Centre",
    tagline: "Grand luxury situated right beside Millennium City Centre metro station",
    starRating: 5,
    userRating: 4.7,
    reviewCount: 2940,
    pricePerNightINR: 10500,
    originalPriceINR: 14000,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Rooftop Thai Pavilion", "Jiva Spa", "Outdoor Pool", "Metro Shuttle", "Business Center"],
    distanceToKeySpot: "300m from Millennium City Centre Metro | 5 mins to Sector 29",
    featured: false,
    roomType: "Deluxe City View King Bed",
    cancellationPolicy: "Free cancellation before 48 hours",
    peakCommuteToCyberHub: "12 mins via Sector 29 Road",
    distanceToMetro: "2 mins walk to Millennium City Centre Metro (Yellow Line)",
    soundproofScore: "9.5/10 Sound Insulated",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  },
  {
    id: "ht-204",
    name: "Trident Hotel Gurgaon",
    city: "Gurgaon",
    area: "DLF Phase 2, Shankar Chowk",
    tagline: "Moroccan courtyard gardens & serene reflective pools in heart of CyberHub",
    starRating: 5,
    userRating: 4.8,
    reviewCount: 3100,
    pricePerNightINR: 11800,
    originalPriceINR: 15500,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Moroccan Architecture", "Water Courtyard", "Organic Fine Dining", "Gym", "Pool"],
    distanceToKeySpot: "1.2 km to DLF Cyber City | 15 mins to Airport",
    featured: true,
    roomType: "Superior Pool View Room",
    cancellationPolicy: "100% Free cancellation",
    peakCommuteToCyberHub: "4 mins drive / 8 mins walk",
    distanceToMetro: "350m to Shankar Chowk Rapid Metro",
    soundproofScore: "9.8/10 Garden Sanctuary",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  },
  {
    id: "ht-205",
    name: "ITC Grand Bharat, Luxury Retreat",
    city: "Gurgaon",
    area: "Hasanpur, Tauru, Gurugram Outskirts",
    tagline: "300-acre Jack Nicklaus golf sanctuary nestled in ancient Aravalli ridges",
    starRating: 5,
    userRating: 4.9,
    reviewCount: 1850,
    pricePerNightINR: 24000,
    originalPriceINR: 32000,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    amenities: ["27-Hole Golf Course", "Kaya Kalp Royal Spa", "Private Plunge Pool Villas", "Helipad"],
    distanceToKeySpot: "Aravalli Range | 35 mins from Cyber City",
    featured: true,
    roomType: "Presidential Pavilion Suite with Private Terrace",
    cancellationPolicy: "Luxury peace of mind guarantee",
    peakCommuteToCyberHub: "30 mins via Sohna Elevated Corridor (No Traffic)",
    distanceToMetro: "Private Chauffeur Included",
    soundproofScore: "10/10 Natural Silence",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  },
  {
    id: "ht-206",
    name: "The Imperial, New Delhi",
    city: "New Delhi",
    area: "Janpath, Connaught Place",
    tagline: "Legendary heritage Art Deco palace hotel in Central Delhi",
    starRating: 5,
    userRating: 4.9,
    reviewCount: 4600,
    pricePerNightINR: 18000,
    originalPriceINR: 24000,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    gallery: [],
    amenities: ["Museum Art Collection", "Spice Route Fine Dining", "Heritage Garden", "Pool"],
    distanceToKeySpot: "500m to Connaught Place | 25 mins to Gurgaon",
    featured: false,
    roomType: "Heritage Deco Room",
    cancellationPolicy: "100% Free cancellation",
    peakCommuteToCyberHub: "25 mins via Yellow Line Express Metro",
    distanceToMetro: "1 min walk to Janpath Metro",
    soundproofScore: "9.7/10 Heritage Quiet",
    verifiedPhotosBadge: true,
    earlyCheckInAvailable: true
  }
];

export const CABS_DATABASE: CabItem[] = [
  {
    id: "cab-301",
    category: "Sedan",
    carModel: "Maruti Dzire / Honda Amaze AC",
    rating: 4.8,
    tripsCount: 14500,
    basePriceINR: 799,
    pricePerKmINR: 14,
    capacity: 4,
    luggageCapacity: "2 Large Bags + 2 Handbags",
    features: ["Air Conditioned", "Sanitized", "Toll & State Tax Included", "Top Rated Chauffeur"],
    driverRating: 4.9,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80",
    zeroCancellationAssurance: true,
    compensationOnCancelINR: 500,
    driverAssignedETA: "Driver Assigned in under 60 seconds",
    tollIncluded: true
  },
  {
    id: "cab-302",
    category: "SUV",
    carModel: "Toyota Innova Crysta 7-Seater",
    rating: 4.9,
    tripsCount: 22100,
    basePriceINR: 1499,
    pricePerKmINR: 19,
    capacity: 6,
    luggageCapacity: "4 Large Bags + 3 Handbags",
    features: ["Rear AC Vents", "Reclining Captain Seats", "Bottled Water & Wi-Fi", "Express Highway Fastag"],
    driverRating: 4.95,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80",
    zeroCancellationAssurance: true,
    compensationOnCancelINR: 500,
    driverAssignedETA: "Driver Assigned in under 60 seconds",
    tollIncluded: true
  },
  {
    id: "cab-303",
    category: "Electric EV",
    carModel: "Tata Nexon EV Max / MG ZS EV",
    rating: 4.9,
    tripsCount: 8400,
    basePriceINR: 949,
    pricePerKmINR: 15,
    capacity: 4,
    luggageCapacity: "2 Large Bags",
    features: ["Zero Emission Green Ride", "Silent Cabin", "Fast Wireless Phone Charging", "Quiet Suspension"],
    driverRating: 4.92,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80",
    zeroCancellationAssurance: true,
    compensationOnCancelINR: 500,
    driverAssignedETA: "Driver Assigned in under 60 seconds",
    tollIncluded: true
  },
  {
    id: "cab-304",
    category: "Luxury",
    carModel: "Mercedes-Benz E-Class / BMW 5 Series",
    rating: 5.0,
    tripsCount: 3900,
    basePriceINR: 4500,
    pricePerKmINR: 45,
    capacity: 3,
    luggageCapacity: "3 Large Bags",
    features: ["Chauffeured Executive Ride", "Burmester Surround Sound", "Cold Beverages", "Airport Meet & Greet"],
    driverRating: 5.0,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    zeroCancellationAssurance: true,
    compensationOnCancelINR: 1000,
    driverAssignedETA: "Executive Chauffeur Dedicated to Your Flight",
    tollIncluded: true
  }
];

export const PACKAGES_DATABASE: PackageItem[] = [
  {
    id: "pkg-401",
    title: "Golden Triangle: Delhi, Gurgaon Cyber City & Royal Jaipur",
    destination: "Delhi - Gurgaon - Jaipur",
    duration: "4 Nights / 5 Days",
    pricePerPersonINR: 18499,
    originalPriceINR: 26000,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    highlights: ["Chauffeured private AC Sedan", "CyberHub Food Tour & Craft Breweries", "Amber Fort & Hawa Mahal guided entry", "5-Star Heritage Stays"],
    inclusions: ["Breakfast Included", "All Monument Entries", "Private Chauffeur", "24/7 Concierge Support"],
    rating: 4.9,
    reviews: 1420,
    theme: "Culture & Heritage",
    zeroHiddenFeeGuaranteed: true,
    dedicatedConcierge: true
  },
  {
    id: "pkg-402",
    title: "Goa Luxury Beachside Escape with Private Yacht Cruise",
    destination: "Goa (North & South)",
    duration: "3 Nights / 4 Days",
    pricePerPersonINR: 22999,
    originalPriceINR: 31000,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    highlights: ["Taj 5-Star Beach Resort", "Private 2-hour Sunset Catamaran Yacht", "Scuba & Parasailing package", "Airport Transfers Included"],
    inclusions: ["Flights + 5★ Resort", "Buffet Breakfast & Dinner", "Watersports Voucher", "Airport Cab"],
    rating: 4.95,
    reviews: 2180,
    theme: "Luxury",
    zeroHiddenFeeGuaranteed: true,
    dedicatedConcierge: true
  },
  {
    id: "pkg-403",
    title: "Manali & Solang Valley Snow Wonderland with Atal Tunnel",
    destination: "Manali - Solang - Sissu",
    duration: "4 Nights / 5 Days",
    pricePerPersonINR: 14999,
    originalPriceINR: 21000,
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=800&q=80",
    highlights: ["Atal Tunnel Drive to Sissu waterfall", "Solang Valley Snow skiing & ATV ride", "Old Manali cafe exploration", "Bonfire & DJ Night"],
    inclusions: ["Volvo luxury bus / Flight transfers", "Mountain View Resort", "All Meals", "Sightseeing Cab"],
    rating: 4.85,
    reviews: 3200,
    theme: "Adventure",
    zeroHiddenFeeGuaranteed: true,
    dedicatedConcierge: true
  },
  {
    id: "pkg-404",
    title: "Dubai Extravaganza: Burj Khalifa, Desert Safari & Marina Cruise",
    destination: "Dubai, UAE",
    duration: "4 Nights / 5 Days",
    pricePerPersonINR: 42999,
    originalPriceINR: 58000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    highlights: ["Burj Khalifa 124th Floor Ticket", "4x4 Red Dune Desert Safari with BBQ Dinner", "Dubai Marina Luxury Dhow Cruise", "Museum of Future"],
    inclusions: ["Return Flights from DEL/BOM", "4★ Downtown Hotel", "UAE Tourist Visa", "Daily Breakfast"],
    rating: 4.92,
    reviews: 1840,
    theme: "Luxury",
    zeroHiddenFeeGuaranteed: true,
    dedicatedConcierge: true
  }
];
