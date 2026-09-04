export interface WikiSection {
  id: string;
  title: string;
  content: string;
  highlights?: string[];
  subsections?: { title: string; content: string }[];
}

export interface DestinationWiki {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  infobox: {
    state: string;
    country: string;
    nickname: string;
    coordinates: string;
    elevation: string;
    population: string;
    timeZone: string;
    languages: string[];
    bestTimeToVisit: string;
    nearestAirport: string;
    pinCodes: string;
    currency: string;
    avgTemp: string;
  };
  quickStats: {
    label: string;
    value: string;
  }[];
  overview: string;
  sections: WikiSection[];
  topAttractions: {
    name: string;
    category: string;
    description: string;
    timing: string;
    entryFee: string;
    image: string;
    location: string;
  }[];
  famousEats: {
    name: string;
    type: string;
    area: string;
    highlight: string;
  }[];
  commuteTips: string[];
  bookingPresets: {
    flightTo: string;
    hotelCity: string;
    cabPickup: string;
  };
}

export const DESTINATIONS_DATA: DestinationWiki[] = [
  {
    id: "gurgaon",
    slug: "gurgaon-gurugram",
    name: "Gurgaon (Gurugram)",
    officialName: "Gurugram, National Capital Region",
    tagline: "The Millennium City & Cyber Capital of India",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Haryana",
      country: "India",
      nickname: "Cyber City, Millennium City",
      coordinates: "28.4595° N, 77.0266° E",
      elevation: "219 m (719 ft)",
      population: "1,514,400+ (Metro: 2.7M+)",
      timeZone: "IST (UTC+05:30)",
      languages: ["Hindi", "English", "Haryanvi", "Punjabi"],
      bestTimeToVisit: "October to March (Pleasant 12°C - 24°C)",
      nearestAirport: "Indira Gandhi International Airport (DEL) - 15 km",
      pinCodes: "122001 to 122022",
      currency: "Indian Rupee (₹ INR)",
      avgTemp: "Winter: 7°C - 22°C | Summer: 28°C - 42°C"
    },
    quickStats: [
      { label: "Fortune 500 Companies", value: "250+" },
      { label: "Distance to IGI Airport", value: "15 mins" },
      { label: "Metro Stations", value: "16+ (Yellow & Rapid)" },
      { label: "Luxury Hotels", value: "45+" }
    ],
    overview: "Gurgaon, officially renamed Gurugram in 2016, is the premier information technology, financial, and banking epicenter of North India. Situated approximately 30 kilometres southwest of New Delhi, and immediately adjacent to Indira Gandhi International Airport, the city has transformed rapidly into a gleaming metropolis of futuristic glass skyscrapers, vibrant corporate parks, luxury lifestyle destinations, and world-class culinary hotspots.",
    sections: [
      {
        id: "etymology-history",
        title: "1. Etymology & Ancient History",
        content: "The origin of the name Gurugram dates back to ancient Indian history and the epic Mahabharata. The land was gifted by the royal Kuru elders (Dhritarashtra and Pandu) to their guru, Guru Dronacharya, the master of archery and warfare who tutored both the Pandavas and Kauravas. 'Guru' signifies teacher and 'Gram' translates to village in Sanskrit, literally rendering it as 'Village of the Guru'.\n\nIn adjacent village Gurgaon Gaon lies the revered Sheetla Mata Mandir, dedicated to Mata Sheetla (Kripi), the wife of Guru Dronacharya. For centuries, the settlement remained primarily rural until late 20th-century economic reforms and real estate visionary DLF triggered one of the most explosive urban turnarounds in South Asia.",
        highlights: [
          "Origin traces directly to Guru Dronacharya from the Mahabharata",
          "Historic Sheetla Mata Temple receives over a million pilgrims annually during Chaitra fair",
          "Renamed officially from Gurgaon to Gurugram on 12 April 2016 by Haryana Government"
        ]
      },
      {
        id: "economy-cybercity",
        title: "2. Economy, Cyber City & Corporate Hub",
        content: "Gurugram represents a powerhouse of Indian corporate revenue, generating over 60% of Haryana's state revenue. It hosts corporate headquarters and regional campuses for more than 250 Fortune 500 enterprises including Google, Microsoft, American Express, Deloitte, Samsung, IBM, and Maruti Suzuki.\n\nKey commercial districts include DLF Cyber City, a futuristic 11-million sq.ft integrated business corridor interconnected by the private Rapid Metro Gurgaon, Golf Course Road, and Udyog Vihar. The city is also India's premier hub for venture capital-funded tech startups, automobile design, and fintech innovation.",
        highlights: [
          "Home to India's first privately financed & operated Rapid Metro system",
          "Houses DLF Cyber City, Horizon Center, CyberHub, and Worldmark Gurgaon",
          "Highest per-capita income district in Haryana and third-highest in India"
        ]
      },
      {
        id: "food-nightlife",
        title: "3. Dining, Microbreweries & Nightlife",
        content: "Gurgaon boasts one of India's most cosmopolitan nightlife and dining landscapes. It is celebrated as the craft beer capital of North India, thanks to progressive brewing licensing.\n\n• CyberHub: An open-air dining and entertainment amphitheatre featuring international gourmet bistros, molecular gastronomy, and lively pubs.\n• Sector 29: The epicenter of craft breweries and rooftop lounges where thousands unwind each evening.\n• 32nd Avenue (32nd Milestone): A European-style cobbled promenade renowned for chic artisan cafes, bakery boutiques, and Michelin-inspired concepts.\n• Galleria Market (DLF Phase 4): A beloved open piazza bustling with legendary chaat corners, waffle kiosks, and bespoke coffee roasters.",
        highlights: [
          "Over 60 craft microbreweries serving freshly brewed Belgian ales and Indian IPAs",
          "32nd Avenue features the world's highest density of specialty dining establishments",
          "Popular late-night drive-ins at Sector 56 and Golf Course Extension"
        ]
      },
      {
        id: "connectivity",
        title: "4. Transport, Commute & Logistics",
        content: "Gurugram offers unmatched multimodal connectivity to Delhi and international travelers:\n\n• Air Connectivity: 15–25 minutes drive to Delhi's Indira Gandhi International Airport (Terminal 3 & Terminal 1) via the 8-lane expressway NH48 and Northern Peripheral Road (Dwarka Expressway).\n• Delhi Metro (Yellow Line): Direct arterial connection from Millennium City Centre Gurugram (formerly HUDA City Centre) through South Delhi, Connaught Place, and Old Delhi.\n• Rapid Metro: Automated rapid transit looping through Cyber City, DLF Phase 2, DLF Phase 3, and Golf Course Road.\n• Highways: National Highway 48 (Delhi-Jaipur Expressway), Kundli-Manesar-Palwal (KMP) Expressway, and the Sohna Elevated Corridor.",
        highlights: [
          "Dwarka Expressway connects Gurgaon to IGI Airport in 12 minutes",
          "App-based cabs (Uber, Ola) and airport radio taxis operate 24/7 across all sectors",
          "Millennium City Centre connects directly to New Delhi Railway Station in 50 minutes via Yellow Line"
        ]
      }
    ],
    topAttractions: [
      {
        name: "DLF CyberHub & Cyber City",
        category: "Entertainment & Dining",
        description: "A premier social, culinary, and corporate epicenter spanning 200,000+ sq ft of fine dining, microbreweries, amphitheatre cultural events, and futuristic glass architecture.",
        timing: "10:00 AM - 01:00 AM",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80",
        location: "DLF Phase 2, NH 48, Gurugram"
      },
      {
        name: "Sultanpur National Park & Bird Sanctuary",
        category: "Nature & Wildlife",
        description: "A Ramsar wetland haven covering 143 hectares, hosting over 250 species of resident and migratory birds including Siberian cranes, flamingos, and pelicans during winter.",
        timing: "07:00 AM - 04:30 PM (Closed Tuesdays)",
        entryFee: "₹5 (Indians) / ₹40 (Foreigners)",
        image: "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=600&q=80",
        location: "Gurugram-Jhajjar Highway, Sultanpur"
      },
      {
        name: "32nd Avenue (32nd Milestone)",
        category: "Lifestyle & Architecture",
        description: "An upscale pedestrian boulevard styled like a European street, illuminated with fairy lights and lined with iconic cafes, rooftop lounges, and tech incubators.",
        timing: "11:00 AM - 12:30 AM",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        location: "NH-48, Sector 15 Part 2, Gurugram"
      },
      {
        name: "Museo Camera (Vintage Camera Museum)",
        category: "Art & Culture",
        description: "One of Southeast Asia's largest dedicated photography museums, exhibiting over 2,500 historic cameras dating from the 1850s alongside contemporary art galleries and workshops.",
        timing: "11:00 AM - 07:00 PM (Closed Mondays)",
        entryFee: "₹200",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        location: "Shri Ganesh Mandir Marg, DLF Phase 4, Sector 28"
      },
      {
        name: "Sheetla Mata Mandir",
        category: "Heritage & Spiritual",
        description: "The historic temple of Mata Sheetla, spouse of Guru Dronacharya, known as a sacred pilgrimage center attracting devotees seeking blessings for health and prosperity.",
        timing: "05:00 AM - 10:00 PM",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
        location: "Sheetla Mata Rd, Sector 6, Gurugram"
      },
      {
        name: "Damdama Lake & Aravalli Hills",
        category: "Adventure & Outdoors",
        description: "One of Haryana's largest natural lakes nestled beside the ancient Aravalli range, offering boating, kayaking, rock climbing, obstacle courses, and lakeside camping.",
        timing: "09:00 AM - 06:30 PM",
        entryFee: "Free (Activity charges apply)",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        location: "Off Sohna-Gurgaon Road, Damdama"
      }
    ],
    famousEats: [
      { name: "Prankster & Molecule Air Bar", type: "Craft Brewery & Molecular Gastronomy", area: "Sector 29", highlight: "Fresh wheat brews & nitrogen desserts" },
      { name: "Burma Burma", type: "Authentic Burmese Asian Tea Room", area: "DLF CyberHub", highlight: "Khow Suey & artisan fermented teas" },
      { name: "The Piano Man Jazz Club", type: "Live Music & Continental Dining", area: "32nd Avenue", highlight: "Live jazz sets & brick-oven pizzas" },
      { name: "Roots - Cafe in the Park", type: "Solar-Powered Organic Cafe", area: "Leisure Valley, Sector 29", highlight: "Poha, masala chai & quiet greenery" }
    ],
    commuteTips: [
      "Download Delhi Metro & Uber apps for smooth cashless transit across NCR.",
      "Peak traffic on NH48 runs from 8:30 AM - 10:30 AM and 6:00 PM - 8:30 PM; use Rapid Metro or Dwarka Expressway to bypass bottlenecks.",
      "Golf Course Road has continuous underpasses offering signal-free driving from Cyber City to Sector 56 in under 12 minutes."
    ],
    bookingPresets: {
      flightTo: "DEL",
      hotelCity: "Gurgaon",
      cabPickup: "Delhi Airport (DEL) to Cyber City Gurgaon"
    }
  },
  {
    id: "delhi",
    slug: "delhi-ncr",
    name: "New Delhi",
    officialName: "National Capital Territory of Delhi",
    tagline: "The Historic Capital of Monuments, Power & Heritage",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1585139158021-d70312cb6910?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592635196078-9ffc8f309995?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Delhi NCT",
      country: "India",
      nickname: "City of Rallies, Dilwalo ki Dilli",
      coordinates: "28.6139° N, 77.2090° E",
      elevation: "216 m (709 ft)",
      population: "33,000,000+ (NCR Urban)",
      timeZone: "IST (UTC+05:30)",
      languages: ["Hindi", "English", "Punjabi", "Urdu"],
      bestTimeToVisit: "October to March",
      nearestAirport: "Indira Gandhi International Airport (DEL)",
      pinCodes: "110001 to 110096",
      currency: "Indian Rupee (₹ INR)",
      avgTemp: "Winter: 6°C - 23°C | Summer: 30°C - 44°C"
    },
    quickStats: [
      { label: "UNESCO Heritage Sites", value: "3 Sites" },
      { label: "Metro Line Network", value: "390+ km" },
      { label: "Centuries of Heritage", value: "8+ Dynasties" },
      { label: "Annual Travelers", value: "18M+" }
    ],
    overview: "New Delhi, the capital of India, is an awe-inspiring juxtaposition of ancient civilizations and modern governance. From the monumental Mughal grandeur of the Red Fort and Humayun's Tomb to the wide tree-lined boulevards of Lutyens' Delhi and the bustling culinary bazaars of Chandni Chowk, Delhi is a sensory feast for every traveler.",
    sections: [
      {
        id: "heritage-monuments",
        title: "1. Imperial History & UNESCO Wonders",
        content: "Delhi has served as the capital of seven historic cities throughout empires spanning the Tomaras, Chauhans, Delhi Sultanate, Mughals, and British Raj. Three majestic UNESCO World Heritage Sites adorn the city: Qutub Minar, the world's tallest brick minaret; Humayun's Tomb, the precursor to the Taj Mahal; and the Red Fort (Lal Qila).",
        highlights: [
          "Qutub Minar complex features the rust-resistant 1600-year-old Iron Pillar",
          "Humayun's Tomb garden represents the Persian Charbagh paradise concept",
          "India Gate stands as a poignant war memorial with the eternal flame Amar Jawan Jyoti"
        ]
      },
      {
        id: "delhi-food",
        title: "2. Legendary Street Food & Royal Awadhi Flavors",
        content: "Old Delhi is globally revered for centuries-old street food traditions. Paranthe Wali Gali in Chandni Chowk has served hot stuffed flatbreads since the 1870s. Famous tandoori butter chicken originated right here at Daryaganj, while Bengali Market and Pandara Road offer mouth-watering chaats, kebabs, and kulfi.",
        highlights: [
          "Karim's and Al Jawahar near Jama Masjid for authentic Mughlai cuisine",
          "Dilli Haat for authentic regional food stalls from all 28 Indian states"
        ]
      }
    ],
    topAttractions: [
      {
        name: "Qutub Minar Complex",
        category: "UNESCO Heritage",
        description: "A 73-meter minaret built in 1192 surrounded by magnificent Indo-Islamic ruins and ornate stone carvings.",
        timing: "07:00 AM - 05:00 PM",
        entryFee: "₹40 (Indians) / ₹600 (Foreigners)",
        image: "https://images.unsplash.com/photo-1585139158021-d70312cb6910?auto=format&fit=crop&w=600&q=80",
        location: "Mehrauli, New Delhi"
      },
      {
        name: "India Gate & Kartavya Path",
        category: "National Monument",
        description: "India's iconic triumphal arch war memorial surrounded by fountains, boat ponds, and pristine lawns.",
        timing: "Open 24 Hours",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
        location: "Rajpath / Kartavya Path, New Delhi"
      }
    ],
    famousEats: [
      { name: "Karim's Heritage", type: "Mughlai & Awadhi", area: "Jama Masjid, Old Delhi", highlight: "Mutton Burra & Shahi Rogan Josh" },
      { name: "Gulati Restaurant", type: "North Indian & Tandoor", area: "Pandara Road", highlight: "Butter Chicken & Dal Makhani" }
    ],
    commuteTips: [
      "Use the Delhi Metro Airport Express Line to travel from T3 to New Delhi Station in 19 mins.",
      "Get a tourist day pass card for unlimited rides across all metro lines."
    ],
    bookingPresets: {
      flightTo: "DEL",
      hotelCity: "New Delhi",
      cabPickup: "Delhi Airport to Central Delhi"
    }
  },
  {
    id: "goa",
    slug: "goa-beaches",
    name: "Goa",
    officialName: "State of Goa",
    tagline: "Sun, Sand, Portuguese Heritage & Serene Waters",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Goa",
      country: "India",
      nickname: "Pearl of the Orient, Sunshine State",
      coordinates: "15.2993° N, 74.1240° E",
      elevation: "1 m - 1,022 m",
      population: "1,580,000+",
      timeZone: "IST (UTC+05:30)",
      languages: ["Konkani", "English", "Marathi", "Hindi", "Portuguese"],
      bestTimeToVisit: "November to February",
      nearestAirport: "Mopa Airport (GOX) & Dabolim (GOI)",
      pinCodes: "403001 to 403806",
      currency: "Indian Rupee (₹ INR)",
      avgTemp: "Winter: 20°C - 31°C | Monsoon: 24°C - 29°C"
    },
    quickStats: [
      { label: "Coastline Length", value: "105+ km" },
      { label: "Major Beaches", value: "35+ Beaches" },
      { label: "Portuguese History", value: "450 Years" },
      { label: "Airports", value: "2 (GOI & GOX)" }
    ],
    overview: "Goa is India's most celebrated coastal retreat, blending 450 years of Portuguese colonial charm with tropical beach paradises. Famous for its golden sandy shorelines, vibrant shacks, seafood curries, whitewashed baroque churches, and electric nightlife, Goa offers relaxation in South Goa and lively fiestas in North Goa.",
    sections: [
      {
        id: "north-vs-south",
        title: "1. North Goa vs South Goa Experiences",
        content: "Travelers in Goa enjoy two distinct worlds: North Goa (Baga, Calangute, Anjuna, Vagator) is the vibrant heart of beach clubs, flea markets, watersports, and neon nightlife. In contrast, South Goa (Palolem, Agonda, Majorda, Colva) offers serene secluded coves, luxury 5-star beachfront resorts, wellness sanctuaries, and heritage spice plantations.",
        highlights: [
          "Fort Aguada offers 360-degree Arabian Sea sunset views and a 17th-century lighthouse",
          "Old Goa houses the Basilica of Bom Jesus containing the relics of St. Francis Xavier"
        ]
      }
    ],
    topAttractions: [
      {
        name: "Basilica of Bom Jesus & Old Goa",
        category: "UNESCO Heritage",
        description: "A 16th-century masterpiece of baroque architecture and sacred pilgrimage site in Old Goa.",
        timing: "09:00 AM - 06:30 PM",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        location: "Old Goa Road, Velha Goa"
      },
      {
        name: "Vagator Beach & Chapora Fort",
        category: "Scenic Coast & Sunset",
        description: "Dramatic red cliffs overlooking crystal waters, famous for the cliffside fort viewpoint.",
        timing: "Open 24 Hours",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
        location: "Vagator, North Goa"
      }
    ],
    famousEats: [
      { name: "Fisherman's Wharf", type: "Goan Seafood & Riverside Dining", area: "Cavelossim / Panjim", highlight: "Goan Fish Curry & Prawn Balchão" },
      { name: "Thalassa Greek Taverna", type: "Greek & Mediterranean", area: "Siolim", highlight: "Sunset views, Souvlaki & Live Greek dancing" }
    ],
    commuteTips: [
      "Rent a scooter or self-drive Thar from local certified rental kiosks.",
      "Goa Miles app provides fixed-rate government approved taxi booking."
    ],
    bookingPresets: {
      flightTo: "GOI",
      hotelCity: "Goa",
      cabPickup: "Goa Airport to North Goa Beach Resort"
    }
  },
  {
    id: "jaipur",
    slug: "jaipur-pink-city",
    name: "Jaipur",
    officialName: "The Pink City of Jaipur",
    tagline: "Royal Palaces, Hilltop Forts & Rich Rajasthani Splendor",
    heroImage: "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Rajasthan",
      country: "India",
      nickname: "The Pink City, Paris of India",
      coordinates: "26.9124° N, 75.7873° E",
      elevation: "431 m (1,414 ft)",
      population: "3,900,000+",
      timeZone: "IST (UTC+05:30)",
      languages: ["Hindi", "Rajasthani (Dhundhari)", "English"],
      bestTimeToVisit: "October to March",
      nearestAirport: "Jaipur International Airport (JAI)",
      pinCodes: "302001 to 302039",
      currency: "Indian Rupee (₹ INR)",
      avgTemp: "Winter: 8°C - 24°C | Summer: 28°C - 43°C"
    },
    quickStats: [
      { label: "UNESCO World Heritage City", value: "Inscribed 2019" },
      { label: "Distance from Gurgaon/Delhi", value: "3.5 hrs (Vande Bharat / Expressway)" },
      { label: "Historic Forts", value: "3 Major Fortresses" },
      { label: "Jantar Mantar Instruments", value: "19 Astronomical Tools" }
    ],
    overview: "Jaipur, the capital of Rajasthan, is world-famous as the 'Pink City' after Maharaja Sawai Ram Singh painted the entire walled city terracotta pink in 1876 to welcome the Prince of Wales. Filled with dramatic hilltop forts (Amber, Nahargarh, Jaigarh), honeycombed palaces (Hawa Mahal, City Palace), and gem markets, it forms the iconic Golden Triangle with Delhi and Agra.",
    sections: [
      {
        id: "palaces-forts",
        title: "1. Royal Architecture & Fortresses",
        content: "Amber Fort showcases spectacular Rajput and Mughal synthesis with its world-famous Sheesh Mahal (Mirror Palace) reflecting thousands of concave convex mirrors with a single candle light. Nahargarh Fort stands atop the Aravalli hills commanding sweeping panoramic sunset vistas over Jaipur.",
        highlights: [
          "Hawa Mahal (Palace of Winds) has 953 intricately carved jharokhas (casements)",
          "Jantar Mantar features the world's largest stone sundial, the Samrat Yantra"
        ]
      }
    ],
    topAttractions: [
      {
        name: "Amber Palace (Amer Fort)",
        category: "UNESCO Hill Fort",
        description: "Opulent Rajput palace fortress perched upon a hill beside Maota Lake, famous for the Sheesh Mahal mirror mosaic.",
        timing: "08:00 AM - 05:30 PM, 06:30 PM - 09:15 PM",
        entryFee: "₹100 (Indians) / ₹500 (Foreigners)",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
        location: "Devisinghpura, Amer, Jaipur"
      },
      {
        name: "Hawa Mahal (Palace of the Winds)",
        category: "Iconic Monument",
        description: "Five-story pink sandstone honeycomb facade built in 1799 for royal ladies to view city processions unseen.",
        timing: "09:00 AM - 05:00 PM",
        entryFee: "₹50 (Indians) / ₹200 (Foreigners)",
        image: "https://images.unsplash.com/photo-1603288940348-18e388d2d9c4?auto=format&fit=crop&w=600&q=80",
        location: "Hawa Mahal Rd, Badi Choupad, Jaipur"
      }
    ],
    famousEats: [
      { name: "Laxmi Misthan Bhandar (LMB)", type: "Traditional Rajasthani & Sweets", area: "Johari Bazaar", highlight: "Ghewar, Pyaaz Kachori & Royal Thali" },
      { name: "Chokhi Dhani", type: "Ethnic Village Resort & Feast", area: "Tonk Road", highlight: "Authentic Dal Baati Churma & Folk dances" }
    ],
    commuteTips: [
      "Travel via the new Delhi-Mumbai Expressway from Gurgaon in just 3 hours.",
      "Explore the walled city using Jaipur Metro or auto-rickshaws."
    ],
    bookingPresets: {
      flightTo: "JAI",
      hotelCity: "Jaipur",
      cabPickup: "Jaipur Airport to Heritage Haveli"
    }
  },
  {
    id: "manali",
    slug: "manali-himachal",
    name: "Manali",
    officialName: "Manali, Kullu Valley, Himachal Pradesh",
    tagline: "Snowy Peaks, Pine Forests & Himalayan Adventures",
    heroImage: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Himachal Pradesh",
      country: "India",
      nickname: "Valley of the Gods",
      coordinates: "32.2396° N, 77.1887° E",
      elevation: "2,050 m (6,726 ft)",
      population: "80,000+ (Valley)",
      timeZone: "IST (UTC+05:30)",
      languages: ["Hindi", "Pahari", "Kullvi", "English"],
      bestTimeToVisit: "Year-Round (Snow: Dec-Feb, Summer: Mar-Jun)",
      nearestAirport: "Bhuntar Kullu Airport (KUU) - 50 km",
      pinCodes: "175131",
      currency: "Indian Rupee (₹ INR)",
      avgTemp: "Winter: -3°C - 10°C | Summer: 12°C - 26°C"
    },
    quickStats: [
      { label: "Atal Tunnel Length", value: "9.02 km (World's Longest above 10,000 ft)" },
      { label: "Rohtang Pass Altitude", value: "3,978 m (13,050 ft)" },
      { label: "Adventure Sports", value: "Skiing, Paragliding, Rafting" },
      { label: "Solang Valley Snow Season", value: "Nov - April" }
    ],
    overview: "Nestled in the majestic Beas River valley of Himachal Pradesh, Manali is India's most beloved Himalayan hill station. Framed by snow-capped peaks, apple orchards, deodar forests, and high-altitude mountain passes leading to Ladakh and Spiti, Manali captivates honeymooners, trekkers, and backpackers alike.",
    sections: [
      {
        id: "adventure-snow",
        title: "1. Solang Valley & Atal Tunnel Engineering",
        content: "The Atal Tunnel, inaugurated in 2020 at 10,000+ feet, provides all-weather connectivity from Manali to the surreal high-altitude deserts of Lahaul and Sissu. Solang Valley is the adventure capital offering paragliding, zorbing, ATV quad biking, and winter skiing.",
        highlights: [
          "Atal Tunnel cuts travel time from Manali to Lahaul Valley by over 4 hours",
          "Rohtang Pass offers year-round glaciers and mountain panoramic points"
        ]
      }
    ],
    topAttractions: [
      {
        name: "Hadimba Devi Temple",
        category: "Ancient Wooden Pagoda",
        description: "A 16th-century wooden temple with 4-tier pagoda roof set within sacred giant deodar Cedar groves.",
        timing: "08:00 AM - 06:00 PM",
        entryFee: "Free Entry",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
        location: "Hadimba Temple Rd, Old Manali"
      },
      {
        name: "Solang Valley & Rohtang Pass",
        category: "Snow Sports & Glaciers",
        description: "Picturesque valley offering snow sports, cable car ropeways, and gateway to Rohtang Pass glaciers.",
        timing: "09:00 AM - 06:00 PM",
        entryFee: "Free (Activities separate)",
        image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=600&q=80",
        location: "Solang Valley, 14 km from Manali"
      }
    ],
    famousEats: [
      { name: "Cafe 1947", type: "Italian & Riverside Bistro", area: "Old Manali", highlight: "Woodfire pizza & riverside seating beside the Manalsu river" },
      { name: "Johnson's Cafe & Bar", type: "Himachali Trout & European", area: "Circuit House Rd", highlight: "Fresh Pan-fried Beas River Trout" }
    ],
    commuteTips: [
      "Volvo luxury overnight sleeper buses run daily from Delhi / Gurgaon IFFCO Chowk to Manali (12-14 hours).",
      "Always obtain Rohtang Pass permits online 2-3 days in advance."
    ],
    bookingPresets: {
      flightTo: "KUU",
      hotelCity: "Manali",
      cabPickup: "Chandigarh to Manali Scenic Drive"
    }
  },
  {
    id: "dubai",
    slug: "dubai-uae",
    name: "Dubai",
    officialName: "Emirate of Dubai, United Arab Emirates",
    tagline: "Futuristic Skyscrapers, Desert Safaris & Global Luxury",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80"
    ],
    infobox: {
      state: "Emirate of Dubai",
      country: "United Arab Emirates",
      nickname: "City of Gold, Futuristic Wonder",
      coordinates: "25.2048° N, 55.2708° E",
      elevation: "0 m - 16 m",
      population: "3,650,000+",
      timeZone: "GST (UTC+04:00)",
      languages: ["Arabic (Official)", "English", "Hindi", "Urdu"],
      bestTimeToVisit: "November to March",
      nearestAirport: "Dubai International Airport (DXB) / DWC",
      pinCodes: "P.O. Box System",
      currency: "UAE Dirham (AED / د.إ)",
      avgTemp: "Winter: 15°C - 26°C | Summer: 32°C - 45°C"
    },
    quickStats: [
      { label: "Burj Khalifa Height", value: "828 m (World's Tallest Building)" },
      { label: "Direct Flight from DEL/BOM", value: "3 hrs 30 mins" },
      { label: "Dubai Mall Retail Stores", value: "1,200+ Stores" },
      { label: "Palm Jumeirah", value: "Largest Artificial Archipelago" }
    ],
    overview: "Dubai is a dazzling hyper-modern metropolis on the Arabian Peninsula. Renowned for record-breaking marvels including the Burj Khalifa, the artificial island of Palm Jumeirah, and opulent megamalls, Dubai offers thrilling red dune desert safaris, luxury yacht cruises, and Michelin-starred global cuisine.",
    sections: [
      {
        id: "modern-icons",
        title: "1. Architectural Marvels & Futuristic Wonders",
        content: "Standing 828 meters tall with 163 floors, the Burj Khalifa dominates the city skyline. At its base lies the spectacular Dubai Fountain and The Dubai Mall. Nearby, the Museum of the Future has been hailed as the most beautiful building on Earth with its torus shape and Arabic calligraphy facade.",
        highlights: [
          "Observation deck at level 148 offers views across the Arabian Gulf",
          "Palm Jumeirah hosts luxury resorts like Atlantis The Royal"
        ]
      }
    ],
    topAttractions: [
      {
        name: "Burj Khalifa & Dubai Mall",
        category: "World Wonder",
        description: "The world's tallest skyscraper with observation decks, world's largest dancing fountains, and 1200+ shopping outlets.",
        timing: "08:30 AM - 11:00 PM",
        entryFee: "AED 179+ (Observation Deck)",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
        location: "Downtown Dubai"
      }
    ],
    famousEats: [
      { name: "Al Fanar Restaurant & Cafe", type: "Traditional Emirati Cuisine", area: "Dubai Festival City", highlight: "Machboos Laham & Luqaimat" }
    ],
    commuteTips: [
      "Use the automated, driverless Dubai Metro with a Silver Nol Card.",
      "Careem and RTA Taxis are readily available 24/7."
    ],
    bookingPresets: {
      flightTo: "DXB",
      hotelCity: "Dubai",
      cabPickup: "DXB Airport to Palm Jumeirah"
    }
  }
];
