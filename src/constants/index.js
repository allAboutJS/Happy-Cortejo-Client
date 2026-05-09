export const APP_NAME = 'Happy Cortejo'
export const APP_TAGLINE = 'Travel Happy. Arrive Better.'
export const APP_DOMAIN = 'happycortejo.com'
export const APP_EMAIL = 'hello@happycortejo.com'
export const WHATSAPP_NUMBER = '+351912345678'
export const WHATSAPP_URL = `https://wa.me/351912345678`
export const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to book a ride with Happy Cortejo.')

export const NAV_LINKS = [
  { label: 'Airport Transfers', href: '/airport-transfers' },
  { label: 'Tours & Day Trips', href: '/tours' },
  { label: 'Business Travel', href: '/business-travel' },
  { label: 'Relocation', href: '/relocation' },
  { label: 'Subscription', href: '/subscription' },
  { label: 'Contact', href: '/contact' },
]

export const ROUTES_DATA = [
  {
    id: 'lx-airport-city',
    from: 'Lisbon Airport',
    to: 'Lisbon City',
    duration: '30–45 min',
    price: 'From €35',
    vehicle: 'Sedan / SUV',
    popular: true,
  },
  {
    id: 'lx-sintra',
    from: 'Lisbon',
    to: 'Sintra',
    duration: '40 min',
    price: 'From €55',
    vehicle: 'Sedan / SUV',
    popular: true,
  },
  {
    id: 'lx-cascais',
    from: 'Lisbon',
    to: 'Cascais',
    duration: '45 min',
    price: 'From €60',
    vehicle: 'Sedan / SUV',
    popular: false,
  },
  {
    id: 'lx-algarve',
    from: 'Lisbon',
    to: 'Algarve',
    duration: '2h 30 min',
    price: 'From €180',
    vehicle: 'SUV / Van',
    popular: true,
  },
  {
    id: 'lx-porto',
    from: 'Lisbon',
    to: 'Porto',
    duration: '3h',
    price: 'From €220',
    vehicle: 'SUV / Van',
    popular: false,
  },
  {
    id: 'lx-madrid',
    from: 'Lisbon',
    to: 'Madrid',
    duration: '6h',
    price: 'From €480',
    vehicle: 'Premium Van',
    popular: false,
  },
  {
    id: 'lx-seville',
    from: 'Lisbon',
    to: 'Seville',
    duration: '2h 45 min',
    price: 'From €260',
    vehicle: 'SUV / Van',
    popular: false,
  },
]

export const SERVICES = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Stress-free pickups and drop-offs at Lisbon, Porto, and Faro airports. Flight tracking included.',
    icon: 'Plane',
    href: '/airport-transfers',
    color: 'navy',
  },
  {
    id: 'inter-country',
    title: 'Inter-Country Rides',
    description: 'Cross into Spain or travel long-distance across Portugal in comfort. No layovers, no stress.',
    icon: 'MapPin',
    href: '/tours',
    color: 'gold',
  },
  {
    id: 'chauffeur-day',
    title: 'Chauffeur-by-the-Day',
    description: 'Book a dedicated driver for the entire day. Perfect for meetings, sightseeing, or events.',
    icon: 'UserCheck',
    href: '/business-travel',
    color: 'navy',
  },
  {
    id: 'relocation',
    title: 'Relocation Concierge',
    description: 'Moving to Portugal? We help expats settle in with transport solutions for every stage of relocation.',
    icon: 'Home',
    href: '/relocation',
    color: 'gold',
  },
  {
    id: 'airbnb-transport',
    title: 'Airbnb Guest Transport',
    description: 'Partner with us to offer guests premium transport. Seamless check-in arrivals and city exploration.',
    icon: 'Key',
    href: '/contact',
    color: 'navy',
  },
  {
    id: 'nightlife',
    title: 'Nightlife Movement',
    description: 'Safe, discreet, and punctual rides for evenings out. Never worry about getting home.',
    icon: 'Moon',
    href: '/contact',
    color: 'gold',
  },
  {
    id: 'business',
    title: 'Business Traveler Package',
    description: 'Corporate accounts, invoicing, meet-and-greet service, and premium vehicles for executives.',
    icon: 'Briefcase',
    href: '/business-travel',
    color: 'navy',
  },
  {
    id: 'emergency',
    title: 'Last-Minute Rides',
    description: 'Need a ride right now? We handle urgent requests with speed and professionalism.',
    icon: 'Zap',
    href: '/contact',
    color: 'gold',
  },
  {
    id: 'subscription',
    title: 'Subscription Chauffeur',
    description: 'Monthly plans for regular travelers. Consistent pricing, priority booking, and a dedicated driver.',
    icon: 'RefreshCw',
    href: '/subscription',
    color: 'navy',
  },
]

export const WHY_US = [
  {
    icon: 'ShieldCheck',
    title: 'Professional Drivers',
    description: 'Licensed, vetted, and trained to deliver a smooth, discreet, and professional experience every time.',
  },
  {
    icon: 'Heart',
    title: 'Human-Centered Service',
    description: 'We treat every journey as personal. You are not a booking number — you are our guest.',
  },
  {
    icon: 'Tags',
    title: 'Flexible Pricing',
    description: 'Transparent, competitive rates with no hidden fees. Tailored quotes for complex needs.',
  },
  {
    icon: 'Clock',
    title: '24/7 Availability',
    description: 'Early morning flights, late-night arrivals — we are always available when you need us.',
  },
  {
    icon: 'Car',
    title: 'Premium Vehicles',
    description: 'Climate-controlled, clean, and modern fleet. Sedans, SUVs, and vans to fit your group.',
  },
  {
    icon: 'Globe',
    title: 'Portugal-Ready',
    description: 'Lisbon-based and operating across the whole country — from the Algarve to Porto and beyond.',
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'London, UK',
    rating: 5,
    text: 'Absolutely seamless experience from start to finish. Our driver was waiting at the airport with a sign, helped with luggage, and the car was spotless. Will always use Happy Cortejo when visiting Lisbon.',
    route: 'Lisbon Airport → Cascais',
    date: 'March 2025',
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'Marco Oliveira',
    location: 'São Paulo, Brazil',
    rating: 5,
    text: 'I booked the Relocation Concierge package when moving to Lisbon and it was the best decision. They handled everything with professionalism and warmth. Truly above and beyond.',
    route: 'Relocation Concierge',
    date: 'January 2025',
    avatar: 'MO',
  },
  {
    id: 3,
    name: 'James Whitfield',
    location: 'New York, USA',
    rating: 5,
    text: 'Used Happy Cortejo for our entire team during a 3-day conference in Lisbon. Perfectly on time every single day. The business package is worth every euro.',
    route: 'Business Traveler Package',
    date: 'April 2025',
    avatar: 'JW',
  },
  {
    id: 4,
    name: 'Amira Hassan',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'We took a day trip to Sintra with our family and it was magical. The driver was knowledgeable, patient with kids, and the vehicle was impeccably clean. Highly recommend.',
    route: 'Lisbon → Sintra Day Trip',
    date: 'February 2025',
    avatar: 'AH',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How do I book a ride with Happy Cortejo?',
    answer: 'You can book via our online form, send us a message on WhatsApp, or email us directly. We respond within 15 minutes during business hours and within 1 hour at night.',
  },
  {
    question: 'Do you track flights for airport pickups?',
    answer: 'Yes. For all airport transfers, we monitor your flight in real time. If your flight is delayed, we adjust your pickup time automatically at no extra charge.',
  },
  {
    question: 'What types of vehicles do you offer?',
    answer: 'We have a fleet of premium sedans (Mercedes E-Class, BMW 5 Series), SUVs (Mercedes GLE, BMW X5), and executive vans for larger groups. All vehicles are under 5 years old.',
  },
  {
    question: 'Can I book a last-minute ride?',
    answer: 'Absolutely. We handle urgent requests depending on availability. The best way to reach us quickly is via WhatsApp.',
  },
  {
    question: 'Do you offer corporate accounts?',
    answer: 'Yes. We offer invoiced corporate accounts with monthly billing, priority access, and a dedicated account manager for business clients.',
  },
  {
    question: 'Is luggage assistance included?',
    answer: 'Yes. Our drivers always assist with loading and unloading luggage. If you have exceptional luggage needs, let us know in advance.',
  },
]

export const LUGGAGE_OPTIONS = [
  { value: '0', label: 'No luggage' },
  { value: '1', label: '1 bag' },
  { value: '2', label: '2 bags' },
  { value: '3', label: '3 bags' },
  { value: '4+', label: '4+ bags' },
]

export const PASSENGER_OPTIONS = [
  { value: '1', label: '1 passenger' },
  { value: '2', label: '2 passengers' },
  { value: '3', label: '3 passengers' },
  { value: '4', label: '4 passengers' },
  { value: '5', label: '5 passengers' },
  { value: '6+', label: '6+ passengers' },
]
