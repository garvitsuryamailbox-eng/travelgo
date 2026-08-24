export interface SignatureJourney {
  id: string;
  slug: string;
  destination: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  startingPrice: string;
  image: string;
  gallery: string[];
  style: string;
  highlights: string[];
  inclusions: string[];
  bestTimeToVisit: string;
}

export interface PrivateEscape {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  tag: string;
  description: string;
}

export interface LuxuryStaySuite {
  id: string;
  name: string;
  size: string;
  view: string;
  pricePerNight: string;
  inclusions: string[];
  image: string;
}

export interface LuxuryStay {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  type: string; // "Palace", "Private Island", "Alpine Lodge", "Safari Camp", "Cliffside Villa"
  tagline: string;
  description: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: string;
  featuredImage: string;
  gallery: string[];
  amenities: string[];
  diningHighlights: string[];
  spaHighlights: string[];
  exclusiveExperiences: string[];
  suites: LuxuryStaySuite[];
  cancellationPolicy: string;
}

export interface LuxuryExperience {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  startingPrice: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  heroImage: string;
  gallery: string[];
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  relatedStayId?: string;
}

export interface DestinationGuide {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  image: string;
  highlights: string[];
  bestSeason: string;
  featuredJourneysCount: number;
}

export interface AureliaTestimonial {
  id: string;
  guestName: string;
  location: string;
  journeyTitle: string;
  destination: string;
  quote: string;
  rating: number;
  year: string;
}

/* ==========================================================================
   1. SIGNATURE JOURNEYS DATA
   ========================================================================== */
export const signatureJourneysData: SignatureJourney[] = [
  {
    id: 'journey-1',
    slug: 'amalfi-coast-summer',
    destination: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    tagline: 'An Italian summer, reimagined.',
    description: 'Private Riva yacht charters, sun-drenched clifftop lemon groves in Ravello, and secluded seaside dining beneath Mediterranean cliffs.',
    longDescription: 'Glide past the iconic pastel cliffs of Positano on a private wooden Riva yacht, sip vintage limoncello in centuries-old orchards in Ravello, and reside in cliffside heritage villas perched high above the azure Tyrrhenian Sea.',
    duration: '8 Days / 7 Nights',
    startingPrice: '$14,500',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Romantic & Coastal',
    highlights: ['Private Riva Yacht to Capri', 'Sunset Clifftop Dinner in Ravello', 'Private Vineyard & Truffle Tasting', 'Helicopter Transfer from Naples'],
    inclusions: ['Luxury 5-Star Clifftop Suite', 'Dedicated 24/7 Chauffeur & Yacht Skipper', 'All Private Tastings & Concierge Access', 'Daily Champagne Breakfast'],
    bestTimeToVisit: 'May – October',
  },
  {
    id: 'journey-2',
    slug: 'maldives-private-islands',
    destination: 'Maldives',
    country: 'Republic of Maldives',
    region: 'Indian Ocean',
    tagline: 'Private islands. Endless horizons.',
    description: 'Overwater pavilions with glass floor telescopes, private catamaran sailing, bioluminescent night diving, and bespoke sandbank dinners.',
    longDescription: 'Escape to an untouched coral atoll accessible only by private seaplane. Wake to turquoise lagoons extending to infinity, personalized wellness rituals orchestrated by world-renowned masters, and dinners served on secluded sandbars illuminated only by candlelight.',
    duration: '7 Days / 6 Nights',
    startingPrice: '$18,200',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Private Escape & Wellness',
    highlights: ['Private Seaplane Transfers', 'Castaway Sandbank Starlight Banquet', 'Manta Ray Coral Sanctuary Dives', 'Dedicated Butler & Wellness Guru'],
    inclusions: ['Ultra-Luxury Ocean Pool Villa', 'Unlimited Spa & Ayurvedic Treatments', 'Private Sommelier Wine Cellar Access', 'Private Yacht Excursions'],
    bestTimeToVisit: 'November – April',
  },
  {
    id: 'journey-3',
    slug: 'swiss-alps-summit',
    destination: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    tagline: 'Where silence meets the summit.',
    description: 'Chalet buyouts overlooking the Matterhorn, private heli-skiing, thermal glacier baths, and fondue banquets in high-alpine refuges.',
    longDescription: 'Experience the quiet majesty of Zermatt and St. Moritz from ultra-private alpine chalets. Enjoy direct glacier ski access, après-ski champagne terraces with blazing stone fireplaces, and vintage train journeys through snow-draped pine forests.',
    duration: '6 Days / 5 Nights',
    startingPrice: '$16,800',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Alpine & Adventure',
    highlights: ['Matterhorn Heli-Ski Flight', 'Private Thermal Glacier Suite', 'Glacier Express Excellence Class', 'Michelin Alpine Tasting with Master Sommelier'],
    inclusions: ['Full Private Chalet with Fireplace & Spa', 'Private Mountain Ski Master', 'Gourmet Private Chef Services', 'Luxury SUV Chauffeur Transfer'],
    bestTimeToVisit: 'December – April & July – September',
  },
  {
    id: 'journey-4',
    slug: 'kyoto-timeless-japan',
    destination: 'Kyoto & Hakone',
    country: 'Japan',
    region: 'Asia',
    tagline: 'Tradition, tranquility and timeless beauty.',
    description: 'After-hours access to ancient Zen temples, secluded ryokan hot springs overlooking Mount Fuji, and private Kaiseki banquets.',
    longDescription: 'Immerse yourself in centuries of refined aesthetic philosophy. Walk through private moss gardens before opening hours, participate in private tea ceremonies with 15th-generation masters, and slumber on fragrant tatami in historical wooden villas.',
    duration: '9 Days / 8 Nights',
    startingPrice: '$15,400',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Cultural Immersion & Zen',
    highlights: ['VIP Temple Access with Head Monk', 'Master Kaiseki Banquet in Gion', 'Private Onsen Villa with Mount Fuji View', 'Artisanal Blade & Ceramics Studio Visit'],
    inclusions: ['Luxury Ryokan & Aman Kyoto Stays', 'Private English-Speaking Cultural Scholar', 'First Class Bullet Train Shinkansen', 'Daily Private Geisha Tea Ceremony'],
    bestTimeToVisit: 'March – May & October – November',
  },
  {
    id: 'journey-5',
    slug: 'rajasthan-royal-heritage',
    destination: 'Rajasthan',
    country: 'India',
    region: 'Asia',
    tagline: 'Palaces, desert skies and royal heritage.',
    description: 'Private suites in 300-year-old marble palaces on Lake Pichola, luxury tented camps in Thar dunes, and private polo club matches.',
    longDescription: 'Step into a world of majestic royalty. Travel between Jaipur, Jodhpur, and Udaipur in vintage motorcars, dine beneath starlit desert canopies with royal musicians, and receive private curations inside royal palace treasuries.',
    duration: '10 Days / 9 Nights',
    startingPrice: '$13,900',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Royal Heritage & Luxury Safari',
    highlights: ['Private Sunset Boat on Lake Pichola', 'Exclusive Access to City Palace Courtyards', 'Royal Tented Desert Camp in Jaisalmer', 'Bespoke Jewelry & Textile Atelier Tour'],
    inclusions: ['Grand Presidential Palace Suites', 'Private Royal Concierge & Historian', 'Private Aviation between Cities', 'All Private Royal Dining'],
    bestTimeToVisit: 'October – March',
  },
  {
    id: 'journey-6',
    slug: 'bora-bora-lagoon-paradise',
    destination: 'Bora Bora & Tahiti',
    country: 'French Polynesia',
    region: 'Oceania',
    tagline: 'The world’s most pristine lagoon.',
    description: 'Iconic thatched overwater villas with views of Mount Otemanu, private helicopter flights, and Polynesian pearl farm expeditions.',
    longDescription: 'An untouched slice of French Polynesian paradise. Savor morning room-service delivered by outrigger canoe, snorkel alongside manta rays in crystalline lagoons, and unwind on private motu islets with chilled vintage rosé.',
    duration: '7 Days / 6 Nights',
    startingPrice: '$17,500',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    style: 'Beach Retreat & Seclusion',
    highlights: ['Canoe Breakfast Delivery', 'Private Mount Otemanu Helicopter Tour', 'Black Pearl Oyster Diving Excursion', 'Sunset Catamaran with Polynesian Fire Dancers'],
    inclusions: ['Premium Overwater Villa with Plunge Pool', 'Private Island Chauffeur & Boat Crew', 'All Coral Diving Gear & Private Marine Biologist', 'Full Gourmet In-Villa Dining'],
    bestTimeToVisit: 'May – October',
  },
];

/* ==========================================================================
   2. PRIVATE ESCAPES DATA
   ========================================================================== */
export const privateEscapesData: PrivateEscape[] = [
  {
    id: 'esc-1',
    category: 'Private Islands',
    title: 'The Sovereign Atoll',
    subtitle: 'Full Island Buyout in the North Malé Atoll',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    tag: 'Island Sanctuary',
    description: 'An exclusive private island sanctuary for up to 20 guests, complete with private master chef, dive yacht, and holistic wellness spa.',
  },
  {
    id: 'esc-2',
    category: 'Luxury Safaris',
    title: 'Serengeti Migration Reserve',
    subtitle: 'Mobile Tented Luxury Camp',
    location: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    tag: 'Wildlife Horizon',
    description: 'Follow the Great Migration with private hot-air balloon flights over endless golden savannas and evening bush banquets.',
  },
  {
    id: 'esc-3',
    category: 'Mountain Retreats',
    title: 'The Alpine Chalet Sanctuary',
    subtitle: 'Private Matterhorn Chalet',
    location: 'Zermatt, Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    tag: 'Alpine Luxury',
    description: 'Ski-in ski-out master estate featuring panoramic Matterhorn views, private cinema, cedarwood wellness spa, and curated wine cellar.',
  },
  {
    id: 'esc-4',
    category: 'Desert Experiences',
    title: 'Al Maha Royal Pavilion',
    subtitle: 'Deep Desert Wildlife Reserve',
    location: 'Dubai & Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Desert Royalty',
    description: 'Private temperature-controlled infinity pools overlooking free-roaming Arabian Oryx, falconry demonstrations, and stargazing majlis.',
  },
  {
    id: 'esc-5',
    category: 'Wellness Retreats',
    title: 'Ubud Sacred Valley Sanctuary',
    subtitle: 'Holistic Rainforest Haven',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    tag: 'Holistic Rejuvenation',
    description: 'Sound-healing pavilions suspended above the Ayung River, personalized Ayurvedic cuisine, and daily meditation with master monks.',
  },
  {
    id: 'esc-6',
    category: 'Yacht Journeys',
    title: 'The Aegean Odyssey',
    subtitle: '160ft Luxury Superyacht Charter',
    location: 'Greek Cyclades & Côte d’Azur',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    tag: 'Bespoke Sailing',
    description: 'Sail between hidden coves, Michelin-starred seaside anchorages, and ancient ruins with a private crew of twelve and master chef.',
  },
];

/* ==========================================================================
   3. LUXURY STAYS DATA
   ========================================================================== */
export const luxuryStaysData: LuxuryStay[] = [
  {
    id: 'azure-palace',
    slug: 'the-azure-palace',
    name: 'The Azure Palace',
    location: 'Amalfi Coast, Italy',
    country: 'Italy',
    type: 'Clifftop Heritage Hotel',
    tagline: 'Perched above the sapphire Mediterranean.',
    description: 'A converted 13th-century clifftop monastery with tiered lemon groves, heated sea-facing infinity pools, and Michelin-starred terrace dining.',
    rating: 4.98,
    reviewsCount: 84,
    pricePerNight: '$2,800',
    featuredImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Clifftop Helipad', 'Sea-Facing Heated Infinity Pool', 'Michelin-Starred Restaurant', 'Private Riva Yacht Pier', 'Valmont Luxury Spa', 'Personal Butler Service'],
    diningHighlights: ['Ristorante Terrazza: Two Michelin Star Mediterranean seafood', 'Il Limone: Al-fresco citrus grove bar and vintage wine cellar'],
    spaHighlights: ['Rose quartz massage treatments', 'Thermal Roman bath suites with sea views'],
    exclusiveExperiences: ['Private sunset boat to Capri', 'Lemon harvest & limoncello masterclass with the estate gardener'],
    suites: [
      {
        id: 'suite-1',
        name: 'The Royal Belvedere Suite',
        size: '140 m² / 1,500 sq ft',
        view: 'Panoramic Gulf of Salerno & Clifftops',
        pricePerNight: '$3,800',
        inclusions: ['Private Plunge Pool', 'Daily Dom Pérignon Champagne', 'Dedicated 24/7 Butler'],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'suite-2',
        name: 'Monastery Heritage Suite',
        size: '95 m² / 1,020 sq ft',
        view: 'Terraced Gardens & Tyrrhenian Sea',
        pricePerNight: '$2,800',
        inclusions: ['Marble Freestanding Bath', 'Daily A la Carte Breakfast', 'VIP Riva Transfer'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      },
    ],
    cancellationPolicy: 'Flexible luxury cancellation up to 14 days prior to arrival.',
  },
  {
    id: 'ocean-pearl',
    slug: 'ocean-pearl-private-island',
    name: 'Ocean Pearl Private Island',
    location: 'Baa Atoll, Maldives',
    country: 'Maldives',
    type: 'Private Island Resort',
    tagline: 'An untouched haven in the UNESCO Biosphere.',
    description: 'Ultra-exclusive overwater and beach residences encircled by living coral reefs, pristine powder beaches, and personalized wellness temples.',
    rating: 5.0,
    reviewsCount: 62,
    pricePerNight: '$3,400',
    featuredImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Seaplane Lounge', 'Overwater Ayurvedic Spa', 'Submarine Lagoon Tours', 'PADI Master Marine Lab', 'Private Sandbank Dining', 'Bespoke Wine Cellar with 800+ Vintages'],
    diningHighlights: ['The Deep: Underwater restaurant surrounded by reef sharks and corals', 'Aqua Grill: Teppanyaki and organic ocean-to-table tasting menus'],
    spaHighlights: ['Crystal sound therapy over water', 'Organic seaweed and pearl dust body polish'],
    exclusiveExperiences: ['Night fluorescence diving with private marine biologist', 'Private sunset yacht champagne cruise'],
    suites: [
      {
        id: 'suite-1',
        name: 'The Grand Overwater Villa with Lap Pool',
        size: '220 m² / 2,360 sq ft',
        view: 'Unobstructed Turquoise Lagoon & Sunset Horizon',
        pricePerNight: '$4,600',
        inclusions: ['Glass floor observatory', 'Private 15m Infinity Pool', '24/7 Island Host'],
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'suite-2',
        name: 'Beachfront Coral Villa',
        size: '180 m² / 1,930 sq ft',
        view: 'Private Beach Access & Tropical Palms',
        pricePerNight: '$3,400',
        inclusions: ['Outdoor Rain Shower', 'Private Garden Cabana', 'Daily Sunset Cocktails'],
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      },
    ],
    cancellationPolicy: 'Complimentary rescheduling or cancellation up to 21 days prior.',
  },
  {
    id: 'alpine-crown',
    slug: 'alpine-crown-lodge',
    name: 'Alpine Crown Lodge',
    location: 'Zermatt, Switzerland',
    country: 'Switzerland',
    type: 'Luxury Alpine Lodge',
    tagline: 'Matterhorn views from every stone fireplace.',
    description: 'An architectural triumph crafted from Swiss pine and local granite, offering direct ski access, private fondue stübli, and cedarwood thermal baths.',
    rating: 4.96,
    reviewsCount: 78,
    pricePerNight: '$2,400',
    featuredImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Ski-in / Ski-out Matterhorn Access', 'Outdoor Heated Alpine Thermal Spa', 'Private Mountain Ski Guides', 'Indoor Lap Pool with Glacier View', 'Cigar & Cognac Salon'],
    diningHighlights: ['La Cime: Fine alpine gastronomy by Chef Jean-Luc', 'The Stübli: Traditional Swiss raclette and black truffle fondue'],
    spaHighlights: ['Swiss pine sauna', 'Heated stone beds and outdoor glacier plunge pool'],
    exclusiveExperiences: ['Sunrise helicopter flight around the Matterhorn peak', 'Private après-ski champagne tasting on the private lodge deck'],
    suites: [
      {
        id: 'suite-1',
        name: 'The Matterhorn Penthouse Suite',
        size: '175 m² / 1,880 sq ft',
        view: 'Direct Unbroken Matterhorn Peak View',
        pricePerNight: '$3,600',
        inclusions: ['Stone Fireplace', 'Private Cedar Hot Tub on Terrace', 'Private Ski Valet'],
        image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      },
    ],
    cancellationPolicy: 'Flexible winter cancellation up to 14 days prior.',
  },
  {
    id: 'raj-heritage',
    slug: 'the-raj-heritage-palace',
    name: 'The Raj Heritage Palace',
    location: 'Udaipur, Rajasthan, India',
    country: 'India',
    type: 'Royal Heritage Palace',
    tagline: 'Living like royal royalty on Lake Pichola.',
    description: 'An iconic 18th-century royal summer palace floating on Lake Pichola, featuring intricately carved marble jharokhas, peacock courtyards, and royal spa therapies.',
    rating: 4.99,
    reviewsCount: 96,
    pricePerNight: '$1,950',
    featuredImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Private Royal Boat Transfer', 'Jiva Royal Ayurvedic Spa', 'Peacock Courtyard Afternoon Tea', 'Astrologer & Sitar Recitals', 'Historic Arms & Jewelry Gallery'],
    diningHighlights: ['Jharokha: Royal Mewari recipes passed down across royal generations', 'Neel Kamal: Lakeside starlight dining with live classical ragas'],
    spaHighlights: ['Royal Mewar bridal bath treatment', 'Ayurvedic herbal oil therapy on the royal spa boat'],
    exclusiveExperiences: ['Private champagne boat tour of Lake Pichola at sunset', 'Private audience inside the City Palace royal archives'],
    suites: [
      {
        id: 'suite-1',
        name: 'The Maharana Imperial Suite',
        size: '160 m² / 1,720 sq ft',
        view: 'Lake Pichola, Jag Mandir & Aravalli Hills',
        pricePerNight: '$3,200',
        inclusions: ['Original 18th-century stained glass', 'Private Royal Butler', 'Vintage Car City Tour'],
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      },
    ],
    cancellationPolicy: 'Complimentary cancellation up to 10 days before check-in.',
  },
];

/* ==========================================================================
   4. LUXURY EXPERIENCES DATA
   ========================================================================== */
export const luxuryExperiencesData: LuxuryExperience[] = [
  {
    id: 'exp-1',
    slug: 'private-superyacht-charter',
    title: 'Private Mediterranean Superyacht Charter',
    category: 'Private Yacht',
    location: 'French Riviera & Amalfi',
    duration: 'Full Day or Weekly',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    description: 'Cruise azure waters aboard an exquisite 140ft yacht staffed with a private skipper, steward, and Michelin-trained private chef.',
    highlights: ['Bespoke 6-Course Sea-to-Table Lunch', 'Seabobs & Jet Ski Equipment', 'Private Mooring in Secluded Capri Coves', 'Curated Champagne Cellar'],
    startingPrice: '$8,500 / day',
  },
  {
    id: 'exp-2',
    slug: 'michelin-starlight-dining',
    title: 'Private Vineyard Michelin Dining',
    category: 'Michelin Dining',
    location: 'Tuscany, Italy & Bordeaux, France',
    duration: 'Evening Event',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    description: 'An intimate table set amidst 100-year-old olive groves and vineyards, prepared personally by a 3-Michelin-star master chef.',
    highlights: ['Rare Grand Cru Wine Pairings', 'Private Cellar Tour with the Estate Owner', 'Acoustic String Quartet Performance', 'Personalized Engraved Menus'],
    startingPrice: '$3,200 / party',
  },
  {
    id: 'exp-3',
    slug: 'alps-helicopter-glacier-landing',
    title: 'Helicopter Glacier Expedition & Summit Lunch',
    category: 'Helicopter Tours',
    location: 'Swiss & French Alps',
    duration: '4 Hours',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
    description: 'Fly through dramatic alpine peaks to land atop an untouched glacier for a caviar and champagne picnic in pristine silence.',
    highlights: ['Private Airbus Helicopter with Head Mountain Pilot', 'Untracked Glacier Snow Landing', 'Caviar & Vintage Dom Pérignon Tasting', 'HD 4K Cinematic Flight Recording'],
    startingPrice: '$4,800',
  },
  {
    id: 'exp-4',
    slug: 'royal-desert-glamping',
    title: 'Starlight Desert Glamping & Falconry',
    category: 'Desert Safari',
    location: 'Dubai & Rajasthan',
    duration: 'Overnight',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'A secluded luxury pavilion set amidst towering crimson sand dunes, featuring silk rugs, open-flame cooking, and astronomer-led celestial telescope sessions.',
    highlights: ['Royal Bedouin Sunset Feast', 'Private Falconry Demonstrations', 'Astronomer with Deep-Sky Telescope', 'Silk-Draped Air-Conditioned Suite'],
    startingPrice: '$3,900 / night',
  },
];

/* ==========================================================================
   5. JOURNAL ARTICLES DATA
   ========================================================================== */
export const journalArticlesData: JournalArticle[] = [
  {
    id: 'art-1',
    slug: '48-hours-on-the-amalfi-coast',
    title: '48 Hours on the Amalfi Coast: Between Lemon Groves & Azure Seas',
    subtitle: 'An insider’s blueprint to the clandestine corners of Positano, Ravello and Capri.',
    category: 'Itineraries',
    readTime: '6 min read',
    author: 'Elena Rossi',
    authorRole: 'Senior European Travel Editor',
    date: 'February 2026',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    ],
    excerpt: 'To truly experience the Amalfi Coast, one must abandon the crowded highways and take to the water aboard a classic wooden Riva craft as the morning light strikes Positano.',
    content: [
      'There is a quiet magic to the Amalfi Coast that reveals itself only when the day-tripper boats depart and the sun begins its descent behind the Faraglioni rocks of Capri. The cliffs take on an amber luminescence, and the scent of wild jasmine and crushed lemons drifts down from the terrace gardens of Ravello.',
      'Begin your morning with an early espresso at Bar Il San Pietro, where the terrace seems suspended between sky and sea. From here, your private skipper will guide your wooden Riva yacht along the dramatic coastline toward secluded swimming grottos untouched by commercial tour boats.',
      'In the evening, ascend the mountain road to Villa Cimbrone in Ravello. Walk to the Infinity Terrace, where marble busts stand sentinel over an endless panorama of the Gulf of Salerno. Dine on Michelin-starred seafood prepared with olive oils pressed from the estate’s own centenary groves.',
    ],
    keyTakeaways: [
      'Charter a private Riva boat for effortless access to hidden swimming coves.',
      'Stay in Ravello for peace, dramatic elevation, and classical music concerts.',
      'Reserve clifftop dining well ahead of sunset for the golden-hour light.',
    ],
    relatedStayId: 'azure-palace',
  },
  {
    id: 'art-2',
    slug: 'where-to-find-silence-in-the-swiss-alps',
    title: 'Where to Find Silence in the Swiss Alps',
    subtitle: 'From car-free mountain hamlets to high-alpine thermal sanctuaries.',
    category: 'Mountain Retreats',
    readTime: '5 min read',
    author: 'Maximilien Vane',
    authorRole: 'Alpine & Wilderness Curator',
    date: 'January 2026',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
    ],
    excerpt: 'In a world dominated by constant noise, the high peaks of Switzerland offer an elusive luxury: absolute acoustic stillness broken only by the whisper of wind over snow.',
    content: [
      'Stepping off the Glacier Express in Zermatt, the absence of combustion engines creates an immediate hush. The town operates entirely on silent electric shuttles and horse-drawn carriages, preserving an atmosphere reminiscent of the 19th-century golden age of alpine exploration.',
      'Higher up, past the tree line where the Matterhorn commands the skyline, private chalets provide sanctuary with floor-to-ceiling glass, crackling hearths, and cedarwood hot tubs overlooking moonlit glaciers. Here, wellness is not a treatment—it is the very act of breathing crisp, mineral-rich mountain air.',
    ],
    keyTakeaways: [
      'Choose car-free villages like Zermatt and Wengen for deep acoustic serenity.',
      'Book high-altitude thermal baths during morning hours when mist rises from the snow.',
      'Travel in late winter for the deepest snow cover and clearest night skies.',
    ],
    relatedStayId: 'alpine-crown',
  },
  {
    id: 'art-3',
    slug: 'japan-beyond-tokyo',
    title: 'Japan Beyond Tokyo: Zen Gardens, Master Artisans & Secluded Ryokans',
    subtitle: 'A journey through ancient cedar forests, meditative hot springs, and artisanal ceramics studios.',
    category: 'Culture & Heritage',
    readTime: '7 min read',
    author: 'Sora Takahashi',
    authorRole: 'Cultural Heritage Scholar',
    date: 'February 2026',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    ],
    excerpt: 'Beyond the neon corridors of modern Tokyo lies a Japan of quiet contemplation, where master carpenters, lacquer artisans, and Zen abbots preserve traditions spanning centuries.',
    content: [
      'Kyoto in the early morning is an exercise in mindfulness. As morning mist floats over the bamboo groves of Arashiyama, the stone gardens of Ryoan-ji invite quiet reflection before public hours.',
      'Residing in a historic ryokan reveals the Japanese art of hospitality—omotenashi. Every detail, from the calligraphy scroll chosen to honor the guest’s arrival to the multi-course Kaiseki dinner reflecting the micro-seasons, speaks of profound aesthetic devotion.',
    ],
    keyTakeaways: [
      'Arrange private after-hours temple visits for peaceful meditation.',
      'Experience a formal multi-course Kaiseki banquet prepared by a generational master chef.',
      'Visit Hakone for thermal onsen baths overlooking Mount Fuji.',
    ],
  },
  {
    id: 'art-4',
    slug: 'inside-rajasthan-royal-heritage',
    title: 'Inside Rajasthan’s Royal Heritage: The Palaces of Udaipur & Jaipur',
    subtitle: 'How 300-year-old royal residences have been meticulously preserved as world-class sanctuaries.',
    category: 'Luxury Stays',
    readTime: '6 min read',
    author: 'Vikramaditya Rathore',
    authorRole: 'Heritage Architecture Consultant',
    date: 'January 2026',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    ],
    excerpt: 'The royal dynasties of Rajasthan built palaces not merely for shelter, but as monuments of timeless romance, grand diplomacy, and artistic mastery.',
    content: [
      'Gliding across Lake Pichola as the evening lanterns illuminate the marble façade of the royal palace is an experience that transcends modern travel. Here, royal hospitality is not staged—it is an inherited lineage.',
      'Inside the palace suites, ceiling frescoes rendered in pure lapis lazuli and gold leaf frame panoramic views of the Aravalli hills, while private courtyards echo with the gentle fountain waters and peacocks strolling across manicured lawns.',
    ],
    keyTakeaways: [
      'Stay in authentic heritage palaces rather than contemporary modern builds.',
      'Hire a dedicated royal historian to unlock hidden palace courtyards.',
      'Experience private camel polo and starlit desert banquets in Jodhpur and Jaisalmer.',
    ],
    relatedStayId: 'raj-heritage',
  },
  {
    id: 'art-5',
    slug: 'five-private-island-escapes',
    title: 'Five Private Island Escapes for Complete Seclusion',
    subtitle: 'Untouched archipelagos from the Indian Ocean to the South Pacific.',
    category: 'Private Islands',
    readTime: '5 min read',
    author: 'Clara Sterling',
    authorRole: 'Private Aviation & Yacht Specialist',
    date: 'January 2026',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    ],
    excerpt: 'For discerning travelers seeking absolute anonymity and privacy, private island buyouts represent the ultimate frontier of luxury hospitality.',
    content: [
      'Imagine an entire tropical island where every footstep belongs to you and your companions. With private airstrips, dedicated culinary brigades, and marine sanctuaries, private islands deliver a bespoke level of freedom unattainable anywhere else on earth.',
    ],
    keyTakeaways: [
      'Verify private seaplane or helicopter transfer coordination directly with your concierge.',
      'Opt for full island buyouts for family celebrations and executive retreats.',
    ],
    relatedStayId: 'ocean-pearl',
  },
];

/* ==========================================================================
   6. DESTINATION GUIDES DATA
   ========================================================================== */
export const destinationGuidesData: DestinationGuide[] = [
  {
    id: 'dest-1',
    name: 'Amalfi Coast & Capri',
    country: 'Italy',
    region: 'Southern Europe',
    tagline: 'Clifftop lemon groves & azure Mediterranean waters.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Capri Sea Caves', 'Ravello Terrace Gardens', 'Positano Cliffside Dining'],
    bestSeason: 'May to October',
    featuredJourneysCount: 3,
  },
  {
    id: 'dest-2',
    name: 'Baa Atoll & North Malé',
    country: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Private coral atolls & overwater sanctuaries.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    highlights: ['UNESCO Biosphere Reefs', 'Sandbank Starlight Dining', 'Subsea Wine Cellars'],
    bestSeason: 'November to April',
    featuredJourneysCount: 4,
  },
  {
    id: 'dest-3',
    name: 'Zermatt & St. Moritz',
    country: 'Switzerland',
    region: 'Central Europe',
    tagline: 'Alpine majesty, glacier baths & private chalets.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Matterhorn Heli-Skiing', 'Glacier Express Excellence Class', 'Thermal Hot Springs'],
    bestSeason: 'Dec – Apr (Winter) / Jul – Sep (Summer)',
    featuredJourneysCount: 3,
  },
  {
    id: 'dest-4',
    name: 'Kyoto & Hakone',
    country: 'Japan',
    region: 'East Asia',
    tagline: 'Ancient Zen temples, Kaiseki dining & bamboo groves.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Private Temple Access', 'Kaiseki Master Chefs', 'Mount Fuji Onsen Stays'],
    bestSeason: 'Spring (Cherry Blossoms) & Autumn',
    featuredJourneysCount: 3,
  },
  {
    id: 'dest-5',
    name: 'Udaipur & Jaipur',
    country: 'India',
    region: 'South Asia',
    tagline: 'Royal lake palaces, desert canopies & royal heritage.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Lake Pichola Sunset Boat', 'Royal Palace Archives', 'Thar Desert Glamping'],
    bestSeason: 'October to March',
    featuredJourneysCount: 4,
  },
  {
    id: 'dest-6',
    name: 'Bora Bora & Tahiti',
    country: 'French Polynesia',
    region: 'South Pacific',
    tagline: 'Lagoon overwater villas with Mount Otemanu horizons.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Mount Otemanu Views', 'Black Pearl Diving', 'Private Motu Dinners'],
    bestSeason: 'May to October',
    featuredJourneysCount: 2,
  },
];

/* ==========================================================================
   7. AURELIA TESTIMONIALS DATA
   ========================================================================== */
export const aureliaTestimonialsData: AureliaTestimonial[] = [
  {
    id: 't-1',
    guestName: 'Lord & Lady Harrington',
    location: 'London, United Kingdom',
    journeyTitle: 'Private Amalfi & Capri Yacht Journey',
    destination: 'Amalfi Coast, Italy',
    quote: 'Aurelia curated an Italian summer beyond our highest expectations. From our private Riva skipper waiting at Naples to after-hours access at Villa Cimbrone, every detail was orchestrated with profound elegance.',
    rating: 5,
    year: '2025',
  },
  {
    id: 't-2',
    guestName: 'Julian & Sophia Moreau',
    location: 'Geneva, Switzerland',
    journeyTitle: 'Maldives Island Buyout',
    destination: 'Baa Atoll, Maldives',
    quote: 'The level of discretion, bespoke culinary curation, and seamless private aviation coordination made our anniversary on Ocean Pearl an unforgettable milestone.',
    rating: 5,
    year: '2025',
  },
  {
    id: 't-3',
    guestName: 'Marcus & Claire Vance',
    location: 'New York, USA',
    journeyTitle: 'Royal Rajasthan Heritage Circuit',
    destination: 'Udaipur & Jaipur, India',
    quote: 'Staying at The Raj Heritage Palace with private sunset lake cruises and a dedicated royal historian brought Rajasthan’s grandeur to life in the most dignified way.',
    rating: 5,
    year: '2026',
  },
];
