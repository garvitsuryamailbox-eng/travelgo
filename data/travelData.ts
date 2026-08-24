export interface Airport {
  city: string;
  code: string;
  name: string;
  country: string;
}

export interface FlightItem {
  id: string;
  airline: string;
  airlineCode: string;
  logo: string;
  flightNumber: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCity?: string;
  price: number;
  cabinClass: string;
  baggage: {
    cabin: string;
    checkIn: string;
  };
  refundable: boolean;
  mealsIncluded: boolean;
}

export interface RoomOption {
  id: string;
  name: string;
  bedType: string;
  maxGuests: number;
  size: string;
  pricePerNight: number;
  originalPrice: number;
  inclusions: string[];
  cancellationPolicy: string;
  availableRooms: number;
}

export interface HotelReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  tripType: string;
}

export interface DetailedHotel {
  id: string;
  name: string;
  location: string;
  city: string;
  country: string;
  category: 'Luxury' | 'Budget' | 'Beach' | 'Family' | 'Business' | 'Resort';
  image: string;
  gallery: string[];
  rating: number;
  ratingLabel: string;
  reviewsCount: number;
  pricePerNight: number;
  originalPrice: number;
  taxes: number;
  amenities: string[];
  badge?: string;
  description: string;
  address: string;
  rooms: RoomOption[];
  reviews: HotelReview[];
}

export interface TrainStation {
  city: string;
  code: string;
  name: string;
}

export interface TrainClassAvailability {
  className: string;
  code: string;
  fare: number;
  status: 'AVAILABLE' | 'RAC' | 'WL';
  statusText: string;
  updatedMinsAgo: number;
}

export interface TrainItem {
  id: string;
  trainNumber: string;
  trainName: string;
  fromStation: string;
  fromCode: string;
  toStation: string;
  toCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  runningDays: string[];
  classes: TrainClassAvailability[];
  pantryAvailable: boolean;
}

export interface BusItem {
  id: string;
  operator: string;
  busType: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  availableSeats: number;
  amenities: string[];
  boardingPoint: string;
  droppingPoint: string;
}

export interface CabItem {
  id: string;
  carName: string;
  category: 'Sedan' | 'SUV' | 'Luxury' | 'Hatchback';
  capacity: string;
  luggage: string;
  image: string;
  rating: number;
  tripType: 'Outstation' | 'Airport' | 'Hourly';
  baseFare: number;
  perKmRate: number;
  inclusions: string[];
  driverBadge: string;
}

export interface OfferItem {
  id: string;
  category: 'All' | 'Flights' | 'Hotels' | 'Holidays' | 'Trains' | 'Buses' | 'Cabs' | 'Bank Deals';
  title: string;
  description: string;
  couponCode: string;
  discountBadge: string;
  validThrough: string;
  bankLogoText?: string;
  bgGradient: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  stateOrCountry: string;
  type: 'Domestic' | 'International';
  category: 'Beach' | 'Mountains' | 'Heritage' | 'Romantic' | 'City';
  image: string;
  startingPrice: number;
  startingPriceInr: number;
  tag?: string;
  description: string;
  popularFor: string[];
}

export interface HolidayPackageItem {
  id: string;
  title: string;
  destination: string;
  duration: string;
  theme: string;
  image: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  priceInr: number;
  discountBadge: string;
  inclusions: string[];
  highlights: string[];
  dayWiseItinerary: { day: number; title: string; desc: string }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  location: string;
  category: 'Adventure' | 'Beach' | 'Culture' | 'Food' | 'Luxury' | 'Nature';
  image: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  price: number;
  priceInr: number;
  highlights: string[];
}

export interface MyTripBooking {
  id: string;
  bookingId: string;
  type: 'Flight' | 'Hotel' | 'Train' | 'Holiday' | 'Bus' | 'Cab';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  title: string;
  subtitle: string;
  dates: string;
  pnr?: string;
  amount: number;
  travellers: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  category: 'Flights' | 'Hotels' | 'Trains' | 'Holidays' | 'Refunds';
  question: string;
  answer: string;
}

// ----------------------------------------------------
// DEMO DATASETS
// ----------------------------------------------------

export const airportsData: Airport[] = [
  { city: 'New Delhi', code: 'DEL', name: 'Indira Gandhi International Airport', country: 'India' },
  { city: 'Mumbai', code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', country: 'India' },
  { city: 'Bengaluru', code: 'BLR', name: 'Kempegowda International Airport', country: 'India' },
  { city: 'Goa', code: 'GOI', name: 'Dabolim International Airport / Manohar (GOX)', country: 'India' },
  { city: 'Chennai', code: 'MAA', name: 'Chennai International Airport', country: 'India' },
  { city: 'Kolkata', code: 'CCU', name: 'Netaji Subhash Chandra Bose International Airport', country: 'India' },
  { city: 'Hyderabad', code: 'HYD', name: 'Rajiv Gandhi International Airport', country: 'India' },
  { city: 'Srinagar', code: 'SXR', name: 'Sheikh ul-Alam International Airport', country: 'India' },
  { city: 'Jaipur', code: 'JAI', name: 'Jaipur International Airport', country: 'India' },
  { city: 'Kochi', code: 'COK', name: 'Cochin International Airport', country: 'India' },
  { city: 'Dubai', code: 'DXB', name: 'Dubai International Airport', country: 'United Arab Emirates' },
  { city: 'Singapore', code: 'SIN', name: 'Singapore Changi Airport', country: 'Singapore' },
  { city: 'Bangkok', code: 'BKK', name: 'Suvarnabhumi Airport', country: 'Thailand' },
  { city: 'Paris', code: 'CDG', name: 'Charles de Gaulle Airport', country: 'France' },
  { city: 'Bali', code: 'DPS', name: 'Ngurah Rai International Airport', country: 'Indonesia' },
  { city: 'London', code: 'LHR', name: 'London Heathrow Airport', country: 'United Kingdom' },
];

export const trainStationsData: TrainStation[] = [
  { city: 'New Delhi', code: 'NDLS', name: 'New Delhi Railway Station' },
  { city: 'Mumbai', code: 'CSMT', name: 'Chhatrapati Shivaji Maharaj Terminus' },
  { city: 'Bengaluru', code: 'SBC', name: 'KSR Bengaluru City Junction' },
  { city: 'Howrah / Kolkata', code: 'HWH', name: 'Howrah Junction' },
  { city: 'Chennai', code: 'MAS', name: 'Chennai Central' },
  { city: 'Varanasi', code: 'BSB', name: 'Varanasi Junction' },
  { city: 'Jaipur', code: 'JP', name: 'Jaipur Junction' },
  { city: 'Ahmedabad', code: 'ADI', name: 'Ahmedabad Junction' },
  { city: 'Goa (Madgaon)', code: 'MAO', name: 'Madgaon Junction' },
  { city: 'Chandigarh', code: 'CDG', name: 'Chandigarh Junction' },
];

export const flightsData: FlightItem[] = [
  {
    id: 'fl-1',
    airline: 'IndiGo',
    airlineCode: '6E',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    flightNumber: '6E-2041',
    from: 'New Delhi',
    fromCode: 'DEL',
    to: 'Mumbai',
    toCode: 'BOM',
    departureTime: '06:00',
    arrivalTime: '08:15',
    duration: '2h 15m',
    stops: 'Non-stop',
    price: 4250,
    cabinClass: 'Economy',
    baggage: { cabin: '7 kg', checkIn: '15 kg' },
    refundable: true,
    mealsIncluded: false,
  },
  {
    id: 'fl-2',
    airline: 'Air India',
    airlineCode: 'AI',
    logo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=120&q=80',
    flightNumber: 'AI-805',
    from: 'New Delhi',
    fromCode: 'DEL',
    to: 'Mumbai',
    toCode: 'BOM',
    departureTime: '08:30',
    arrivalTime: '10:50',
    duration: '2h 20m',
    stops: 'Non-stop',
    price: 4890,
    cabinClass: 'Economy',
    baggage: { cabin: '7 kg', checkIn: '20 kg' },
    refundable: true,
    mealsIncluded: true,
  },
  {
    id: 'fl-3',
    airline: 'Vistara',
    airlineCode: 'UK',
    logo: 'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=120&q=80',
    flightNumber: 'UK-995',
    from: 'New Delhi',
    fromCode: 'DEL',
    to: 'Mumbai',
    toCode: 'BOM',
    departureTime: '10:15',
    arrivalTime: '12:35',
    duration: '2h 20m',
    stops: 'Non-stop',
    price: 5420,
    cabinClass: 'Premium Economy',
    baggage: { cabin: '7 kg', checkIn: '25 kg' },
    refundable: true,
    mealsIncluded: true,
  },
  {
    id: 'fl-4',
    airline: 'Akasa Air',
    airlineCode: 'QP',
    logo: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=120&q=80',
    flightNumber: 'QP-1302',
    from: 'New Delhi',
    fromCode: 'DEL',
    to: 'Bengaluru',
    toCode: 'BLR',
    departureTime: '14:45',
    arrivalTime: '17:35',
    duration: '2h 50m',
    stops: 'Non-stop',
    price: 4680,
    cabinClass: 'Economy',
    baggage: { cabin: '7 kg', checkIn: '15 kg' },
    refundable: false,
    mealsIncluded: false,
  },
  {
    id: 'fl-5',
    airline: 'IndiGo',
    airlineCode: '6E',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=120&q=80',
    flightNumber: '6E-5128',
    from: 'New Delhi',
    fromCode: 'DEL',
    to: 'Goa',
    toCode: 'GOI',
    departureTime: '11:10',
    arrivalTime: '13:45',
    duration: '2h 35m',
    stops: 'Non-stop',
    price: 5199,
    cabinClass: 'Economy',
    baggage: { cabin: '7 kg', checkIn: '15 kg' },
    refundable: true,
    mealsIncluded: false,
  },
  {
    id: 'fl-6',
    airline: 'Emirates',
    airlineCode: 'EK',
    logo: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=120&q=80',
    flightNumber: 'EK-511',
    from: 'Mumbai',
    fromCode: 'BOM',
    to: 'Dubai',
    toCode: 'DXB',
    departureTime: '19:20',
    arrivalTime: '21:15',
    duration: '3h 25m',
    stops: 'Non-stop',
    price: 18450,
    cabinClass: 'Economy',
    baggage: { cabin: '7 kg', checkIn: '30 kg' },
    refundable: true,
    mealsIncluded: true,
  },
];

export const detailedHotelsData: DetailedHotel[] = [
  {
    id: 'hotel-1',
    name: 'Taj Exotica Resort & Spa',
    location: 'Benaulim, South Goa',
    city: 'Goa',
    country: 'India',
    category: 'Resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.9,
    ratingLabel: 'Exceptional',
    reviewsCount: 1420,
    pricePerNight: 16500,
    originalPrice: 22000,
    taxes: 2100,
    amenities: ['Private Beach Access', 'Infinity Pool', 'Jiva Ayurvedic Spa', 'Free High-Speed Wi-Fi', 'Golf Course', '24h Room Service', 'Kids Play Zone'],
    badge: 'Best Seller',
    description: 'Set on 56 acres of lush gardens along the pristine Arabian Sea, Taj Exotica features Mediterranean-style luxury villas with grand arches and flower-lined verandas.',
    address: 'Calwaddo, Benaulim, Salcete, Goa 403716',
    rooms: [
      {
        id: 'room-1',
        name: 'Deluxe Sea View Villa Room',
        bedType: '1 King Bed or 2 Twin Beds',
        maxGuests: 3,
        size: '56 sqm',
        pricePerNight: 16500,
        originalPrice: 22000,
        inclusions: ['Free Buffet Breakfast', 'Welcome Drink on Arrival', 'Complimentary High Tea', 'Free Cancellation before 48h'],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in. Non-refundable thereafter.',
        availableRooms: 4,
      },
      {
        id: 'room-2',
        name: 'Luxury Plunge Pool Suite',
        bedType: '1 King Bed',
        maxGuests: 2,
        size: '88 sqm',
        pricePerNight: 26500,
        originalPrice: 34000,
        inclusions: ['Private Plunge Pool', 'All Meals Included', 'Butler Service', 'Airport Pick & Drop in Luxury Sedan'],
        cancellationPolicy: 'Free cancellation up to 7 days before check-in.',
        availableRooms: 2,
      },
    ],
    reviews: [
      {
        id: 'hr-1',
        author: 'Rohan Malhotra',
        rating: 5,
        date: 'January 2026',
        title: 'Breathtaking property and legendary hospitality',
        comment: 'The private beach is calm and immaculate. The seafood at Miguel Arcanjo was sensational. The spa treatment is a must-try!',
        tripType: 'Couples Trip',
      },
      {
        id: 'hr-2',
        author: 'Pooja Iyer',
        rating: 5,
        date: 'December 2025',
        title: 'Perfect luxury family holiday',
        comment: 'Kids loved the pool activities and buggy rides across the property. Staff accommodated all our requests with warmth.',
        tripType: 'Family with Kids',
      },
    ],
  },
  {
    id: 'hotel-2',
    name: 'The Oberoi Cecil Heritage Stay',
    location: 'Chaura Maidan, Shimla / Manali',
    city: 'Manali',
    country: 'India',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.95,
    ratingLabel: 'Superb Heritage',
    reviewsCount: 890,
    pricePerNight: 14500,
    originalPrice: 19000,
    taxes: 1800,
    amenities: ['Heated Indoor Pool', 'Mountain Valley View', 'Fireplace Lounges', 'Cedar Forest Walks', 'Fine Dining Atrium'],
    badge: 'Heritage Classic',
    description: 'A grand heritage landmark nestled in the majestic Himalayas, featuring polished Burmese teak floors, roaring fireplaces, and panoramic mountain panoramas.',
    address: 'Chaura Maidan, Shimla, Himachal Pradesh 171004',
    rooms: [
      {
        id: 'room-3',
        name: 'Premier Mountain View Valley Room',
        bedType: '1 King Bed',
        maxGuests: 2,
        size: '45 sqm',
        pricePerNight: 14500,
        originalPrice: 19000,
        inclusions: ['Breakfast & Dinner', 'High Altitude Tea Tasting', 'Heated Bedding'],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in.',
        availableRooms: 3,
      },
    ],
    reviews: [
      {
        id: 'hr-3',
        author: 'Ananya Sharma',
        rating: 5,
        date: 'January 2026',
        title: 'Snowfall view from the bedroom window was magical',
        comment: 'Warm hospitality, heated pool in cold weather was heavenly, and the food was top-notch.',
        tripType: 'Honeymoon',
      },
    ],
  },
  {
    id: 'hotel-3',
    name: 'W Hotel & Beachfront Escape',
    location: 'Vagator Beach, North Goa',
    city: 'Goa',
    country: 'India',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.88,
    ratingLabel: 'Vibrant & Modern',
    reviewsCount: 1120,
    pricePerNight: 18900,
    originalPrice: 24000,
    taxes: 2400,
    amenities: ['Rock Pool Sunset Bar', 'Direct Beach Access', 'Away Spa', 'Fitness Gym', 'Cocktail Lounge', 'Pet Friendly'],
    badge: 'Popular',
    description: 'Perched over Vagator beach with front-row sunset views of Chapora Fort, W Goa blends bold contemporary luxury with vibrant coastal energy.',
    address: 'Vagator Beach, Bardez, Goa 403509',
    rooms: [
      {
        id: 'room-4',
        name: 'Wonderful Garden View Room',
        bedType: '1 King Bed',
        maxGuests: 3,
        size: '50 sqm',
        pricePerNight: 18900,
        originalPrice: 24000,
        inclusions: ['Buffet Breakfast at The Kitchen Table', 'Access to Rock Pool', 'Free Wi-Fi'],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in.',
        availableRooms: 5,
      },
    ],
    reviews: [
      {
        id: 'hr-4',
        author: 'Karan Mehra',
        rating: 5,
        date: 'February 2026',
        title: 'Best sunset parties and incredible music vibes',
        comment: 'The rock pool bar has the best sunset vibe in North Goa. Excellent breakfast buffet with fresh coconut water and customized egg counters.',
        tripType: 'Friends Trip',
      },
    ],
  },
  {
    id: 'hotel-4',
    name: 'Rambagh Palace - Royal Heritage',
    location: 'Bhawani Singh Road, Jaipur',
    city: 'Rajasthan',
    country: 'India',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.98,
    ratingLabel: 'World Renowned',
    reviewsCount: 1650,
    pricePerNight: 32000,
    originalPrice: 42000,
    taxes: 4200,
    amenities: ['Royal Peacock Gardens', 'Vintage Car Transfer', 'Polo Bar', 'Jiva Grande Spa', 'Butler Service', 'Indoor Marble Pool'],
    badge: 'Royal Icon',
    description: 'Former residence of the Maharaja of Jaipur, featuring 47 acres of landscaped gardens, marble corridors, and world-class royal hospitality.',
    address: 'Bhawani Singh Road, Jaipur, Rajasthan 302005',
    rooms: [
      {
        id: 'room-5',
        name: 'Palace Historical Room',
        bedType: '1 Royal Canopy Bed',
        maxGuests: 2,
        size: '52 sqm',
        pricePerNight: 32000,
        originalPrice: 42000,
        inclusions: ['Royal Rajput Welcome', 'Buffet Breakfast at Rajput Room', 'Palace Heritage Walk with Historian'],
        cancellationPolicy: 'Free cancellation up to 5 days before arrival.',
        availableRooms: 2,
      },
    ],
    reviews: [
      {
        id: 'hr-5',
        author: 'Vikramaditya Rao',
        rating: 5,
        date: 'January 2026',
        title: 'Felt like true royalty from the moment we arrived',
        comment: 'The peacocks roaming the morning gardens and the flute music during breakfast made this unforgettable.',
        tripType: 'Luxury Holiday',
      },
    ],
  },
  {
    id: 'hotel-5',
    name: 'The Khyber Himalayan Resort & Spa',
    location: 'Gulmarg, Kashmir',
    city: 'Kashmir',
    country: 'India',
    category: 'Resort',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.93,
    ratingLabel: 'Scenic Alpine',
    reviewsCount: 780,
    pricePerNight: 21500,
    originalPrice: 28000,
    taxes: 2600,
    amenities: ['Ski-in Ski-out Access', 'Heated Glass Pool', 'L’Occitane Spa', 'Pine Forest Views', 'Kahwa Lounge'],
    badge: 'Alpine Ski',
    description: 'Set amidst 7 acres of coniferous forest at 8,825 feet, offering magnificent views of Affarwat peaks and direct access to Gulmarg Gondola.',
    address: 'Hotel Khyber, Gulmarg, Jammu and Kashmir 193403',
    rooms: [
      {
        id: 'room-6',
        name: 'Premier Pine View Balcony Room',
        bedType: '1 King Bed',
        maxGuests: 2,
        size: '48 sqm',
        pricePerNight: 21500,
        originalPrice: 28000,
        inclusions: ['Daily Kashmiri Breakfast & Dinner', 'Warm Kahwa on Arrival', 'Ski Storage & Assistance'],
        cancellationPolicy: 'Free cancellation up to 7 days before check-in.',
        availableRooms: 3,
      },
    ],
    reviews: [
      {
        id: 'hr-6',
        author: 'Sneha Patel',
        rating: 5,
        date: 'January 2026',
        title: 'Snow wonderland with heated indoor pool view',
        comment: 'Looking at snow covered pine trees while swimming in the heated pool is an out of the world experience.',
        tripType: 'Winter Vacation',
      },
    ],
  },
  {
    id: 'hotel-6',
    name: 'Kumarakom Lake Resort',
    location: 'Vembanad Lake, Kumarakom, Kerala',
    city: 'Kerala',
    country: 'India',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    ],
    rating: 4.91,
    ratingLabel: 'Serene Backwaters',
    reviewsCount: 940,
    pricePerNight: 15800,
    originalPrice: 21000,
    taxes: 1900,
    amenities: ['Meandering Pool Villa', 'Sunset Lake Cruise', 'Ayurveda Spa', 'Traditional Seafood Restaurant', 'Fishing Deck'],
    badge: 'Backwater Gem',
    description: 'Heritage villas reconstructed from traditional 16th-century ancestral homes, surrounding an 800-foot meandering swimming pool on the banks of Vembanad Lake.',
    address: 'Kumarakom North Post, Kottayam, Kerala 686563',
    rooms: [
      {
        id: 'room-7',
        name: 'Meandering Pool Heritage Villa',
        bedType: '1 King Bed',
        maxGuests: 3,
        size: '52 sqm',
        pricePerNight: 15800,
        originalPrice: 21000,
        inclusions: ['Direct Pool Access from Veranda', 'Breakfast & Evening Tea Cruise', 'Pottery & Weaving Demos'],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in.',
        availableRooms: 4,
      },
    ],
    reviews: [
      {
        id: 'hr-7',
        author: 'Deepak Nambiar',
        rating: 5,
        date: 'December 2025',
        title: 'Authentic Kerala soul and tranquility',
        comment: 'Stepping into the pool directly from our room deck was sheer bliss. The evening flute recital during sunset cruise was memorable.',
        tripType: 'Family Trip',
      },
    ],
  },
];

export const trainsData: TrainItem[] = [
  {
    id: 'tr-1',
    trainNumber: '22436',
    trainName: 'Vande Bharat Express',
    fromStation: 'New Delhi',
    fromCode: 'NDLS',
    toStation: 'Varanasi Junction',
    toCode: 'BSB',
    departureTime: '06:00',
    arrivalTime: '14:00',
    duration: '8h 00m',
    runningDays: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
    pantryAvailable: true,
    classes: [
      { className: 'AC Chair Car', code: 'CC', fare: 1750, status: 'AVAILABLE', statusText: 'Available 48', updatedMinsAgo: 5 },
      { className: 'Exec Chair Car', code: 'EC', fare: 3300, status: 'AVAILABLE', statusText: 'Available 14', updatedMinsAgo: 8 },
    ],
  },
  {
    id: 'tr-2',
    trainNumber: '12952',
    trainName: 'Mumbai Tejas Rajdhani Express',
    fromStation: 'New Delhi',
    fromCode: 'NDLS',
    toStation: 'Mumbai Central',
    toCode: 'MMCT',
    departureTime: '16:55',
    arrivalTime: '08:35',
    duration: '15h 40m',
    runningDays: ['Daily'],
    pantryAvailable: true,
    classes: [
      { className: 'AC 3 Tier', code: '3A', fare: 2380, status: 'AVAILABLE', statusText: 'Available 84', updatedMinsAgo: 3 },
      { className: 'AC 2 Tier', code: '2A', fare: 3450, status: 'RAC', statusText: 'RAC 6', updatedMinsAgo: 12 },
      { className: 'AC 1st Class', code: '1A', fare: 5200, status: 'AVAILABLE', statusText: 'Available 4', updatedMinsAgo: 10 },
    ],
  },
  {
    id: 'tr-3',
    trainNumber: '12004',
    trainName: 'Lucknow Swarna Shatabdi',
    fromStation: 'New Delhi',
    fromCode: 'NDLS',
    toStation: 'Lucknow Junction',
    toCode: 'LJN',
    departureTime: '06:10',
    arrivalTime: '12:40',
    duration: '6h 30m',
    runningDays: ['Daily'],
    pantryAvailable: true,
    classes: [
      { className: 'AC Chair Car', code: 'CC', fare: 1165, status: 'AVAILABLE', statusText: 'Available 112', updatedMinsAgo: 2 },
      { className: 'Exec Chair Car', code: 'EC', fare: 2125, status: 'AVAILABLE', statusText: 'Available 18', updatedMinsAgo: 6 },
    ],
  },
  {
    id: 'tr-4',
    trainNumber: '12138',
    trainName: 'Punjab Mail',
    fromStation: 'New Delhi',
    fromCode: 'NDLS',
    toStation: 'CSMT Mumbai',
    toCode: 'CSMT',
    departureTime: '05:15',
    arrivalTime: '07:35',
    duration: '26h 20m',
    runningDays: ['Daily'],
    pantryAvailable: true,
    classes: [
      { className: 'Sleeper', code: 'SL', fare: 690, status: 'AVAILABLE', statusText: 'Available 32', updatedMinsAgo: 15 },
      { className: 'AC 3 Tier', code: '3A', fare: 1840, status: 'WL', statusText: 'WL 14', updatedMinsAgo: 4 },
      { className: 'AC 2 Tier', code: '2A', fare: 2680, status: 'RAC', statusText: 'RAC 12', updatedMinsAgo: 9 },
    ],
  },
];

export const busesData: BusItem[] = [
  {
    id: 'bus-1',
    operator: 'IntrCity SmartBus (Lounge Access)',
    busType: 'Bharat Benz AC Sleeper (2+1)',
    from: 'New Delhi (Kashmere Gate)',
    to: 'Manali (Private Bus Stand)',
    departureTime: '19:30',
    arrivalTime: '08:00',
    duration: '12h 30m',
    rating: 4.8,
    reviewsCount: 1890,
    price: 1299,
    originalPrice: 1699,
    availableSeats: 16,
    amenities: ['Charging Port', 'Blankets & Pillows', 'Live Tracking', 'Water Bottle', 'Wi-Fi', 'Clean Rest Stops'],
    boardingPoint: 'IntrCity SmartBus Lounge, Kashmere Gate Gate 1',
    droppingPoint: 'Manali Volvo Stand, Mall Road Area',
  },
  {
    id: 'bus-2',
    operator: 'Zingbus Plus',
    busType: 'Volvo Multi-Axle 9600 AC Sleeper',
    from: 'Delhi (Majnu Ka Tilla)',
    to: 'Jaipur (Sindhi Camp)',
    departureTime: '06:00',
    arrivalTime: '11:15',
    duration: '5h 15m',
    rating: 4.7,
    reviewsCount: 920,
    price: 649,
    originalPrice: 899,
    availableSeats: 22,
    amenities: ['Emergency Exit', 'Reading Light', 'Charging Point', 'Free Snack Box'],
    boardingPoint: 'Zingbus Hub, Majnu Ka Tilla Metro Stn',
    droppingPoint: 'Sindhi Camp Bus Station, Jaipur',
  },
  {
    id: 'bus-3',
    operator: 'Orange Travels Gold Class',
    busType: 'Scania Multi-Axle AC Semi-Sleeper',
    from: 'Bengaluru (Madiwala)',
    to: 'Goa (Panjim)',
    departureTime: '20:45',
    arrivalTime: '08:30',
    duration: '11h 45m',
    rating: 4.6,
    reviewsCount: 1450,
    price: 1450,
    originalPrice: 1950,
    availableSeats: 12,
    amenities: ['Personal TV Screen', 'Water Bottle', 'Blanket', 'GPS Tracking'],
    boardingPoint: 'Madiwala Petrol Bunk, Bengaluru',
    droppingPoint: 'Panjim Bus Stand, Goa',
  },
  {
    id: 'bus-4',
    operator: 'VRL Travels Executive',
    busType: 'Isuzu AC Seater / Sleeper',
    from: 'Mumbai (Borivali)',
    to: 'Pune (Swargate)',
    departureTime: '07:30',
    arrivalTime: '11:00',
    duration: '3h 30m',
    rating: 4.6,
    reviewsCount: 650,
    price: 499,
    originalPrice: 650,
    availableSeats: 28,
    amenities: ['Express Highway Route', 'Air Suspension', 'Live Tracking'],
    boardingPoint: 'Borivali West Near Gokul Hotel',
    droppingPoint: 'Swargate VRL Office, Pune',
  },
];

export const cabsData: CabItem[] = [
  {
    id: 'cab-1',
    carName: 'Maruti Suzuki Dzire / Toyota Etios',
    category: 'Sedan',
    capacity: '4 Passengers',
    luggage: '2 Medium Bags',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    rating: 4.85,
    tripType: 'Outstation',
    baseFare: 2850,
    perKmRate: 11.5,
    inclusions: ['Toll & State Taxes Included', 'Fuel & Driver Allowance', 'Sanitized AC Cab', 'Free Cancellation before 1h'],
    driverBadge: 'Top Rated Verified Driver',
  },
  {
    id: 'cab-2',
    carName: 'Maruti Ertiga / Kia Carens (6-Seater)',
    category: 'SUV',
    capacity: '6 Passengers',
    luggage: '4 Large Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    tripType: 'Outstation',
    baseFare: 4200,
    perKmRate: 15.0,
    inclusions: ['Tolls & Taxes Included', 'Generous Boot Space', 'Rear AC Vents', 'Bottled Water Onboard'],
    driverBadge: 'Highway Expert Driver',
  },
  {
    id: 'cab-3',
    carName: 'Toyota Innova Crysta VIP',
    category: 'Luxury',
    capacity: '6 Passengers',
    luggage: '5 Large Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80',
    rating: 4.96,
    tripType: 'Airport',
    baseFare: 5600,
    perKmRate: 19.0,
    inclusions: ['Airport Flight Tracking', 'Placard Meet & Greet', 'All Airport Parking Fees', '60 Mins Free Wait Time'],
    driverBadge: 'Executive Chauffeur',
  },
  {
    id: 'cab-4',
    carName: 'WagonR / Hyundai Grand i10',
    category: 'Hatchback',
    capacity: '4 Passengers',
    luggage: '1 Large Bag',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
    rating: 4.75,
    tripType: 'Hourly',
    baseFare: 1450,
    perKmRate: 10.0,
    inclusions: ['4 Hours / 40 Km Package', 'AC Ride', 'Multiple Stops Allowed'],
    driverBadge: 'City Navigator',
  },
];

export const offersData: OfferItem[] = [
  {
    id: 'off-1',
    category: 'Flights',
    title: 'Flat 12% Off on Domestic Flights',
    description: 'Use your HDFC Bank Credit Card & save up to ₹2,000 on one-way and round-trip domestic flights.',
    couponCode: 'HDFCFEST',
    discountBadge: 'Flat 12% OFF',
    validThrough: 'Valid till 30 Sep 2026',
    bankLogoText: 'HDFC BANK',
    bgGradient: 'from-blue-700 via-indigo-700 to-sky-700',
  },
  {
    id: 'off-2',
    category: 'Hotels',
    title: 'Up to 25% Off on Luxury Stays & Resorts',
    description: 'Book 5-star villas & heritage properties in Goa, Manali, Kerala & Jaipur with zero convenience fee.',
    couponCode: 'STAYGO25',
    discountBadge: 'Save 25%',
    validThrough: 'Valid on 2+ Nights Bookings',
    bankLogoText: 'ICICI BANK',
    bgGradient: 'from-emerald-700 via-teal-700 to-cyan-700',
  },
  {
    id: 'off-3',
    category: 'Holidays',
    title: '₹5,000 Instant Savings on Kashmir & Bali',
    description: 'All-inclusive holiday packages with flights, private transport, 4-star stays, and guided sightseeing.',
    couponCode: 'HOLIDAYVIP',
    discountBadge: 'Flat ₹5,000 OFF',
    validThrough: 'Limited Slots Daily',
    bankLogoText: 'SBI CARD',
    bgGradient: 'from-amber-600 via-orange-600 to-rose-700',
  },
  {
    id: 'off-4',
    category: 'Trains',
    title: 'Zero Gateway Fees on Train Bookings',
    description: 'Enjoy 100% free IRCTC payment gateway processing and instant cancellation refunds to your wallet.',
    couponCode: 'RAILZERO',
    discountBadge: '0% Fees',
    validThrough: 'Valid for New Users',
    bankLogoText: 'AXIS BANK',
    bgGradient: 'from-purple-700 via-indigo-800 to-slate-900',
  },
  {
    id: 'off-5',
    category: 'Buses',
    title: 'Flat ₹150 Cashback on AC Sleeper Buses',
    description: 'Travel intercity with IntrCity, Zingbus, and VRL with live tracking and free lounge waiting access.',
    couponCode: 'BUSRIDE150',
    discountBadge: 'Flat ₹150 OFF',
    validThrough: 'Valid across 500+ Routes',
    bankLogoText: 'CRED PAY',
    bgGradient: 'from-cyan-700 via-teal-800 to-slate-900',
  },
  {
    id: 'off-6',
    category: 'Cabs',
    title: 'Flat 15% Off Outstation & Airport Cabs',
    description: 'Book verified AC cabs with zero surge pricing and all toll and state taxes included in advance.',
    couponCode: 'CABGO15',
    discountBadge: '15% OFF',
    validThrough: 'No Surge Guarantee',
    bankLogoText: 'PAYTM UPI',
    bgGradient: 'from-rose-600 via-pink-700 to-purple-800',
  },
];

export const destinationsData: DestinationItem[] = [
  {
    id: 'dest-goa',
    name: 'Goa',
    stateOrCountry: 'India',
    type: 'Domestic',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    startingPrice: 349,
    startingPriceInr: 4999,
    tag: 'Trending',
    description: 'Golden sun-drenched beaches, Portuguese colonial architecture, watersports, and lively coastal shacks.',
    popularFor: ['Baga & Anjuna Beach', 'Scuba Diving', 'Sunset Catamaran', 'Heritage Churches'],
  },
  {
    id: 'dest-manali',
    name: 'Manali & Kasol',
    stateOrCountry: 'Himachal Pradesh, India',
    type: 'Domestic',
    category: 'Mountains',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    startingPrice: 280,
    startingPriceInr: 3999,
    tag: 'Popular',
    description: 'Snow-capped Himalayan peaks, roaring Beas river rapids, Solang Valley adventures, and apple orchards.',
    popularFor: ['Rohtang Pass', 'Paragliding', 'Atal Tunnel', 'Old Manali Cafes'],
  },
  {
    id: 'dest-dubai',
    name: 'Dubai',
    stateOrCountry: 'United Arab Emirates',
    type: 'International',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    startingPrice: 620,
    startingPriceInr: 28999,
    tag: 'Top International',
    description: 'Futuristic skylines, desert dunes safari, luxury megamalls, and world-record architectural wonders.',
    popularFor: ['Burj Khalifa', 'Desert Safari BBQ', 'Dubai Mall Fountain', 'Palm Jumeirah'],
  },
  {
    id: 'dest-bali',
    name: 'Bali & Nusa Penida',
    stateOrCountry: 'Indonesia',
    type: 'International',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    startingPrice: 420,
    startingPriceInr: 22499,
    tag: 'Best Seller',
    description: 'Emerald rice terraces, clifftop sea temples, sacred monkey forests, and turquoise ocean lagoons.',
    popularFor: ['Ubud Swings', 'Kelingking Beach', 'Floating Breakfast', 'Tanah Lot Temple'],
  },
  {
    id: 'dest-singapore',
    name: 'Singapore',
    stateOrCountry: 'Singapore',
    type: 'International',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    startingPrice: 580,
    startingPriceInr: 32000,
    tag: 'Family Favorite',
    description: 'Supertrees of Gardens by the Bay, world-famous night safari, Sentosa Island, and Michelin hawker street food.',
    popularFor: ['Universal Studios', 'Marina Bay Sands', 'Night Safari', 'Jewel Changi'],
  },
  {
    id: 'dest-paris',
    name: 'Paris',
    stateOrCountry: 'France',
    type: 'International',
    category: 'Romantic',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    startingPrice: 790,
    startingPriceInr: 45000,
    tag: 'Iconic Europe',
    description: 'The Eiffel Tower at twilight, charming cobblestone bistro terraces, world-class Louvre art, and Seine cruises.',
    popularFor: ['Eiffel Tower Summit', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
  },
  {
    id: 'dest-kashmir',
    name: 'Kashmir (Srinagar, Gulmarg & Pahalgam)',
    stateOrCountry: 'Jammu & Kashmir, India',
    type: 'Domestic',
    category: 'Mountains',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    startingPrice: 380,
    startingPriceInr: 8999,
    tag: 'Paradise on Earth',
    description: 'Scenic Dal Lake shikara rides, snow-blanketed ski slopes of Gulmarg, and Betaab Valley meadows in Pahalgam.',
    popularFor: ['Houseboat Stay', 'Gulmarg Gondola Ride', 'Pony Trekking', 'Pashmina Shopping'],
  },
  {
    id: 'dest-rajasthan',
    name: 'Jaipur, Udaipur & Jodhpur',
    stateOrCountry: 'Rajasthan, India',
    type: 'Domestic',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    startingPrice: 290,
    startingPriceInr: 5499,
    tag: 'Royal Heritage',
    description: 'Palatial forts of the Rajput kings, serene Lake Pichola boat rides, camel desert safaris, and vibrant bazaars.',
    popularFor: ['Amber Fort Elephant Ride', 'Lake Palace Udaipur', 'Mehrangarh Fort', 'Chokhi Dhani Food'],
  },
];

export const holidayPackagesData: HolidayPackageItem[] = [
  {
    id: 'pkg-1',
    title: 'Magical Kashmir Paradise & Gulmarg Gondola',
    destination: 'Srinagar, Gulmarg & Pahalgam',
    duration: '5 Nights / 6 Days',
    theme: 'Mountains & Honeymoon',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 640,
    price: 380,
    originalPrice: 520,
    priceInr: 18499,
    discountBadge: 'Save 25%',
    inclusions: [
      '1 Night Luxury Dal Lake Houseboat',
      '4 Nights 4-Star Mountain Resort',
      'Shikara Sunset Ride Included',
      'Daily Breakfast & Dinner',
      'Private Chauffeur Sedan for Sightseeing',
      'Gulmarg Gondola Phase 1 Fast-track Pass',
    ],
    highlights: [
      'Gondola ride over snowy Affarwat Peak',
      'Mughal Gardens & Shalimar Bagh heritage walk',
      'Betaab & Aru Valley excursion in Pahalgam',
    ],
    dayWiseItinerary: [
      { day: 1, title: 'Arrival in Srinagar & Dal Lake Shikara Cruise', desc: 'Check in to handcrafted wooden luxury houseboat, sunset Shikara tour.' },
      { day: 2, title: 'Srinagar to Gulmarg Alpine Journey', desc: 'Cable car Gondola ride to Phase 1 & 2, snow activities and pine walks.' },
      { day: 3, title: 'Gulmarg to Pahalgam Valley of Shepherds', desc: 'Scenic drive along saffron fields of Pampore and Apple orchards.' },
      { day: 4, title: 'Pahalgam Exploration (Aru & Betaab Valleys)', desc: 'Lidder river strolls, local trout tasting, and optional pony treks.' },
      { day: 5, title: 'Return to Srinagar & Heritage Tour', desc: 'Visit Chashme Shahi, Shankaracharya Temple, and Old Srinagar spice bazaar.' },
      { day: 6, title: 'Departure with Sweet Memories', desc: 'Transfer to Srinagar Airport with personalized travel souvenir.' },
    ],
  },
  {
    id: 'pkg-2',
    title: 'Grand Kerala Backwaters, Munnar & Houseboat Bliss',
    destination: 'Cochin, Munnar, Thekkady & Alleppey',
    duration: '6 Nights / 7 Days',
    theme: 'Nature & Relaxation',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    rating: 4.93,
    reviewsCount: 510,
    price: 410,
    originalPrice: 550,
    priceInr: 21999,
    discountBadge: 'Best Seller',
    inclusions: [
      'Private Deluxe Alleppey Houseboat',
      'Tea Plantation Chalet in Munnar',
      'Periyar Wildlife Boat Safari in Thekkady',
      'All Meals on Houseboat Cruise',
      'Kathakali & Kalaripayattu Cultural Show',
    ],
    highlights: [
      'Sunrise tea plucking experience in Munnar estates',
      'Spice plantation walking tour with tasting',
      'Overnight backwater cruise through palm-fringed canals',
    ],
    dayWiseItinerary: [
      { day: 1, title: 'Arrival in Cochin & Drive to Munnar', desc: 'Witness Cheeyappara waterfalls along the scenic misty mountain ghats.' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam Sanctuary', desc: 'Spot endangered Nilgiri Tahr and visit the historic Tea Museum.' },
      { day: 3, title: 'Munnar to Thekkady Wildlife Reserve', desc: 'Periyar Lake boat ride, spice garden discovery, and traditional martial arts.' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat', desc: 'Board private Kettuvallam houseboat, enjoy Kerala Sadya on banana leaf.' },
      { day: 5, title: 'Alleppey to Kovalam Beach Resort', desc: 'Relax at Lighthouse Beach and indulge in Ayurvedic full-body rejuvenation.' },
      { day: 6, title: 'Kovalam & Trivandrum City Heritage', desc: 'Padmanabhaswamy temple view and sunset coastal dining.' },
      { day: 7, title: 'Departure from Trivandrum / Cochin', desc: 'Airport transfer with complimentary Kerala banana chips & spice box.' },
    ],
  },
  {
    id: 'pkg-3',
    title: 'Royal Rajasthan: Forts, Palaces & Desert Dunes',
    destination: 'Jaipur, Jodhpur & Udaipur',
    duration: '5 Nights / 6 Days',
    theme: 'Heritage & Royalty',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 430,
    price: 360,
    originalPrice: 480,
    priceInr: 16999,
    discountBadge: 'Save 22%',
    inclusions: [
      'Heritage Haveli & Palace Stays',
      'Private AC Sedan with English/Hindi Chauffeur',
      'Lake Pichola Sunset Boat Ticket in Udaipur',
      'Amber Fort Light & Sound Show Pass',
      'Traditional Rajasthani Thali Dinner',
    ],
    highlights: [
      'Panoramic view of Jaipur Pink City from Nahargarh Fort',
      'Exploring the colossal ramparts of Mehrangarh in Jodhpur',
      'Romantic waterfront dining alongside City Palace Udaipur',
    ],
    dayWiseItinerary: [
      { day: 1, title: 'Arrival in Jaipur (The Pink City)', desc: 'Check in to heritage hotel, visit Hawa Mahal and Johari Bazaar.' },
      { day: 2, title: 'Jaipur Royal Forts & Palaces', desc: 'Amber Fort tour, City Palace museum, and sunset at Jal Mahal.' },
      { day: 3, title: 'Jaipur to Jodhpur (The Blue City)', desc: 'Drive across Rajasthan plains, visit Jaswant Thada & Mehrangarh Fort.' },
      { day: 4, title: 'Jodhpur to Udaipur via Ranakpur Jain Temples', desc: 'Marvel at 1,444 marble carved pillars in Ranakpur valley.' },
      { day: 5, title: 'Udaipur City of Lakes Discovery', desc: 'City Palace tour, Saheliyon-ki-Bari gardens, and Lake Pichola cruise.' },
      { day: 6, title: 'Departure from Udaipur', desc: 'Transfer to Udaipur Airport / Railway Station.' },
    ],
  },
  {
    id: 'pkg-4',
    title: 'Dubai Dazzle: Burj Khalifa, Desert Safari & Luxury Marina',
    destination: 'Dubai, UAE',
    duration: '4 Nights / 5 Days',
    theme: 'Luxury & Adventure',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 720,
    price: 680,
    originalPrice: 890,
    priceInr: 34999,
    discountBadge: 'Top Pick',
    inclusions: [
      '4-Star Downtown Dubai Hotel',
      'Burj Khalifa 124th Floor Observation Pass',
      '4x4 Desert Dune Bashing with BBQ Dinner & Tanoura Show',
      'Marina Luxury Yacht Sunset Cruise',
      'Dubai Airport VIP Pick & Drop',
    ],
    highlights: [
      'Witnessing Dubai skyline from top of the world',
      'Thrilling red sand dune bashing & camel rides',
      'Shopping at gold & spice souks and Dubai Mall',
    ],
    dayWiseItinerary: [
      { day: 1, title: 'Arrival in Dubai & Marina Dhow Dinner Cruise', desc: 'Transfer to hotel, evening 5-star international buffet cruise with live music.' },
      { day: 2, title: 'Dubai Half-Day City Tour & Burj Khalifa At The Top', desc: 'Visit Dubai Frame, Palm Jumeirah, and evening Dubai Fountain show.' },
      { day: 3, title: 'Thrilling Desert Safari with Bedouin Camp Dinner', desc: 'Quad biking (optional), dune bashing, henna painting, belly dance & BBQ.' },
      { day: 4, title: 'Free Day for Shopping / Theme Parks', desc: 'Explore Mall of the Emirates Ski Dubai or Museum of the Future.' },
      { day: 5, title: 'Departure from Dubai', desc: 'Airport transfer after duty-free souvenir shopping.' },
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Scuba Diving & Coral Safari at Grand Island',
    location: 'South Goa',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    duration: '6 Hours',
    rating: 4.9,
    reviewsCount: 320,
    price: 45,
    priceInr: 2499,
    highlights: ['PADI certified dive instructor', 'Underwater video & photos included', 'Boat ride with dolphin sighting', 'Buffet lunch on island'],
  },
  {
    id: 'exp-2',
    title: 'Sunset Catamaran Yacht Cruise with Live Saxophone',
    location: 'Miramar Beach / Mandovi River, Goa',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    duration: '2.5 Hours',
    rating: 4.95,
    reviewsCount: 210,
    price: 35,
    priceInr: 1999,
    highlights: ['Complimentary sparkling wine & snacks', '360-degree sunset ocean views', 'Stargazing deck lounge'],
  },
  {
    id: 'exp-3',
    title: 'Private Geisha Tea Ceremony & Bamboo Forest Walk',
    location: 'Arashiyama, Kyoto',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    duration: '3 Hours',
    rating: 4.98,
    reviewsCount: 440,
    price: 65,
    priceInr: 4500,
    highlights: ['Traditional matcha preparation', 'Historical shrine blessing', 'Private kimono dress-up session'],
  },
  {
    id: 'exp-4',
    title: 'Old Delhi Midnight Street Food & Spice Trail',
    location: 'Chandni Chowk, Delhi',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    duration: '4 Hours',
    rating: 4.92,
    reviewsCount: 580,
    price: 25,
    priceInr: 1499,
    highlights: ['10+ famous food tastings (Kebabs, Jalebi, Parathas)', 'Asia’s largest spice market rooftop view', 'Cycle rickshaw ride'],
  },
  {
    id: 'exp-5',
    title: 'Sunrise Hot Air Balloon Flight over Amer Fort',
    location: 'Jaipur, Rajasthan',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80',
    duration: '3.5 Hours',
    rating: 4.97,
    reviewsCount: 290,
    price: 110,
    priceInr: 8500,
    highlights: ['Panoramic bird-eye views of Aravalli hills', 'Champagne toast upon landing', 'Flight certificate signed by pilot'],
  },
  {
    id: 'exp-6',
    title: 'Night Kayaking with Bioluminescent Plankton',
    location: 'Havelock Island, Andaman',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80',
    duration: '2 Hours',
    rating: 4.94,
    reviewsCount: 380,
    price: 40,
    priceInr: 2800,
    highlights: ['Glowing blue water trails with every paddle stroke', 'Mangrove forest night navigation', 'Experienced sea guide'],
  },
];

export const myTripsDemoData: MyTripBooking[] = [
  {
    id: 'trip-1',
    bookingId: 'TG-FL-90412',
    type: 'Flight',
    status: 'Upcoming',
    title: 'New Delhi (DEL) → Goa (GOI)',
    subtitle: 'IndiGo 6E-5128 · Non-stop · Seat 12A, 12B',
    dates: '15 Sep 2026, 11:10 AM',
    pnr: 'TG88J2',
    amount: 10398,
    travellers: ['Aditya Verma', 'Pooja Verma'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'trip-2',
    bookingId: 'TG-HT-45129',
    type: 'Hotel',
    status: 'Upcoming',
    title: 'Taj Exotica Resort & Spa, Goa',
    subtitle: 'Deluxe Sea View Villa Room · 3 Nights · Breakfast Included',
    dates: '15 Sep - 18 Sep 2026',
    pnr: 'CONF-TAJ-9921',
    amount: 49500,
    travellers: ['Aditya Verma', 'Pooja Verma'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'trip-3',
    bookingId: 'TG-TR-10294',
    type: 'Train',
    status: 'Completed',
    title: 'New Delhi (NDLS) → Varanasi (BSB)',
    subtitle: 'Vande Bharat Express (22436) · Executive Class (EC)',
    dates: '10 Feb 2026, 06:00 AM',
    pnr: '245-8910243',
    amount: 6600,
    travellers: ['Aditya Verma', 'Pooja Verma'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'trip-4',
    bookingId: 'TG-PK-88120',
    type: 'Holiday',
    status: 'Completed',
    title: 'Magical Kashmir Paradise & Gulmarg Gondola',
    subtitle: '5 Nights / 6 Days Package · Houseboat & Luxury Resorts',
    dates: '12 Jan - 17 Jan 2026',
    pnr: 'PKG-KSH-881',
    amount: 36998,
    travellers: ['Aditya Verma', 'Pooja Verma'],
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'trip-5',
    bookingId: 'TG-BS-33019',
    type: 'Bus',
    status: 'Cancelled',
    title: 'Delhi (Kashmere Gate) → Manali',
    subtitle: 'IntrCity SmartBus AC Sleeper · Refund of ₹2,598 Processed to Source',
    dates: '02 Dec 2025, 07:30 PM',
    pnr: 'BUS-IC-7721',
    amount: 2598,
    travellers: ['Aditya Verma', 'Pooja Verma'],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Flights',
    question: 'How do I check in online for my domestic or international flight?',
    answer: 'Online web check-in opens 48 hours to 60 minutes prior to scheduled departure for most domestic airlines (IndiGo, Air India, Vistara). Simply visit your My Trips section on TravelGo, click Web Check-in, and select your preferred seats with boarding pass generation.',
  },
  {
    id: 'faq-2',
    category: 'Flights',
    question: 'What is the baggage allowance for domestic flights?',
    answer: 'For standard economy domestic tickets on Indian carriers, 15 kg check-in baggage and 7 kg cabin handbag are included free of charge (Air India offers up to 20-25 kg on selected fares). Additional baggage can be pre-booked at discounted rates during checkout.',
  },
  {
    id: 'faq-3',
    category: 'Hotels',
    question: 'What is the standard check-in and check-out time at hotels?',
    answer: 'Standard check-in time across most hotels and luxury resorts is between 12:00 PM and 2:00 PM, and check-out is between 10:00 AM and 11:00 AM. Early check-in or late check-out can be requested in the Special Requests field during booking, subject to room availability.',
  },
  {
    id: 'faq-4',
    category: 'Trains',
    question: 'Can I cancel my train ticket and receive an instant refund?',
    answer: 'Yes. Cancellations made through TravelGo adhere to official Indian Railways cancellation rules. Once cancelled, your refund amount is instantly credited to your TravelGo Wallet or refunded back to your original source account within 24-48 hours.',
  },
  {
    id: 'faq-5',
    category: 'Holidays',
    question: 'Can holiday packages be customized for family or senior citizens?',
    answer: 'Absolutely. Our curated holiday packages include customizable day plans, private vehicle choices (Sedan vs SUV), meal plan upgrades (EP/CP/MAP), and specific hotel room preferences. Contact our demo concierge team for customized itineraries.',
  },
  {
    id: 'faq-6',
    category: 'Refunds',
    question: 'How does TravelGo Free Cancellation protection work?',
    answer: 'When you select Free Cancellation during booking, you can cancel your hotel or flight up to 24-48 hours before the scheduled time with 100% refund of the base fare, with zero cancellation penalty deducted.',
  },
];

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  destination: string;
  date: string;
  comment: string;
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Aarav Singhania',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    destination: 'Goa Luxury Villa Escape',
    date: 'February 2026',
    comment: 'TravelGo made booking our family vacation to South Goa completely seamless. The instant voucher was recognized by the resort instantly, and the private cab was waiting at Dabolim airport on time.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priyanka Sen',
    location: 'Kolkata, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    destination: 'Kashmir Houseboat & Gondola',
    date: 'January 2026',
    comment: 'The 6-day Kashmir package was flawless! The Dal Lake houseboat stay and Gulmarg Gondola passes took all the planning stress away. Customer assistance answered our queries in minutes.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Rahul Mehra',
    location: 'Delhi NCR, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    destination: 'Vande Bharat to Varanasi',
    date: 'January 2026',
    comment: 'Booking Vande Bharat train tickets with zero convenience fee was super smooth. The ticket voucher and seat confirmation was sent straight to WhatsApp. Highly recommended!',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Shreya Kulkarni',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    destination: 'Kerala Backwaters & Munnar',
    date: 'December 2025',
    comment: 'Saved over ₹3,500 using our bank promo code on the Munnar resort. Clean rooms, breathtaking tea garden views, and authentic Kerala cuisine. TravelGo is now our family travel portal!',
    verified: true,
  },
];

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: 'Itineraries' | 'Luxury Stays' | 'Culture & Heritage' | 'Adventure' | 'Food & Nightlife';
  readTime: string;
  author: string;
  date: string;
  image: string;
  tag: string;
  featured?: boolean;
  relatedDestination: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'The Ultimate 48-Hour Abu Dhabi & Dubai Luxury Guide: From Grand Mosques to Desert Dunes',
    excerpt: 'Explore the architectural masterpiece of Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, desert glamping pavilions, and Michelin-starred rooftop dining.',
    category: 'Itineraries',
    readTime: '6 min read',
    author: 'TravelGo Curators',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Trending Guide',
    featured: true,
    relatedDestination: 'Dubai / Abu Dhabi',
  },
  {
    id: 'art-2',
    title: 'Secret North Goa: Heritage Portuguese Mansions, Quiet Coves & Sun-Drenched Cafés',
    excerpt: 'Escape the tourist crowds with our curated map to hidden Fontainhas villas, clandestine beach shacks, and artisanal feni tasting rooms.',
    category: 'Culture & Heritage',
    readTime: '4 min read',
    author: 'Aanya Sen',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tag: 'Hidden Gems',
    relatedDestination: 'Goa',
  },
  {
    id: 'art-3',
    title: 'Kashmir in Full Bloom: The Insider Guide to Gulmarg Gondola & Houseboat Serenity',
    excerpt: 'Everything you need to know about booking Phase-2 Gondola cable tickets, authentic Dal Lake Shikara rides, and saffron valley excursions.',
    category: 'Adventure',
    readTime: '5 min read',
    author: 'Karan Malhotra',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mountain Escape',
    relatedDestination: 'Kashmir',
  },
  {
    id: 'art-4',
    title: 'Royal Rajasthan: Living Like Royalty in 300-Year-Old Palace Hotels of Udaipur & Jaipur',
    excerpt: 'Discover marble courtyards, private sunset boat cruises on Lake Pichola, and royal dining banquets beneath the stars.',
    category: 'Luxury Stays',
    readTime: '7 min read',
    author: 'Devika Singhania',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tag: 'Royal Heritage',
    relatedDestination: 'Rajasthan',
  },
  {
    id: 'art-5',
    title: 'Bali Beyond the Beaches: Sacred Water Temples, Jungle Infinity Pools & Sunset Cliffs',
    excerpt: 'A deep dive into Ubud’s lush rainforest retreats, holistic sound-healing sanctuaries, and Uluwatu cliffside beach clubs.',
    category: 'Luxury Stays',
    readTime: '5 min read',
    author: 'Liam Vance',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    tag: 'Island Life',
    relatedDestination: 'Bali',
  },
  {
    id: 'art-6',
    title: 'Gastronomy Trail: 10 Must-Try Culinary Journeys Across Old Delhi, Lucknow & Mumbai',
    excerpt: 'From fragrant Awadhi dum biryani and buttery kebabs to sea-facing coastal seafood thalis in Colaba.',
    category: 'Food & Nightlife',
    readTime: '4 min read',
    author: 'Rohit Bajaj',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    tag: 'Foodie Trail',
    relatedDestination: 'India Culinary',
  },
];


