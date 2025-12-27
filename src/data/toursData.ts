import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import heroImage from "@/assets/hero-beach.jpg";
import surfingImage from "@/assets/surfing.jpg";
import whaleImage from "@/assets/whale-watching.jpg";

export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
}

export interface TransportOption {
  type: string;
  capacity: string;
  priceMultiplier: number;
}

export interface TourData {
  name: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  slug: string;
  category: string;
  itinerary: DayItinerary[];
  transportOptions: TransportOption[];
  highlights: string[];
}

const defaultTransportOptions: TransportOption[] = [
  { type: "Car", capacity: "2 Passengers", priceMultiplier: 1 },
  { type: "Van", capacity: "Up to 8 Passengers", priceMultiplier: 1.5 },
  { type: "Mini Coach", capacity: "Up to 20 Passengers", priceMultiplier: 2.2 },
  { type: "Big Bus", capacity: "32 / 42 / 52 Passengers", priceMultiplier: 3 },
];

export const tourCategories = [
  { name: "All Tours", slug: "all" },
  { name: "Classic Tours", slug: "classic" },
  { name: "Beach & Coastal", slug: "beach" },
  { name: "Hill Country", slug: "hillcountry" },
  { name: "Wildlife & Safari", slug: "wildlife" },
  { name: "Religious & Pilgrimage", slug: "religious" },
  { name: "Adventure", slug: "adventure" },
];

export const tours: TourData[] = [
  // =============== CLASSIC TOURS ===============
  {
    name: "Quick Sri Lanka Escape",
    image: galleImage,
    description: "A short 3-day introduction to Sri Lanka's highlights—perfect for those with limited time who want to experience the essence of the island.",
    duration: "3 Days",
    price: 249,
    slug: "quick-escape",
    category: "classic",
    highlights: ["Colombo city tour", "Galle Fort", "Beach relaxation"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Colombo City Tour",
        activities: [
          "Airport pickup and transfer to Colombo",
          "Visit Gangaramaya Temple",
          "Explore Independence Square",
          "Walk through Pettah Market",
          "Evening at Galle Face Green",
        ],
      },
      {
        day: 2,
        title: "Galle Fort & Southern Coast",
        activities: [
          "Drive to Galle along scenic coastal road",
          "Explore UNESCO-listed Galle Fort",
          "Visit the lighthouse and ramparts",
          "Stilt fishing photo stop",
          "Beach time in Unawatuna or Mirissa",
        ],
      },
      {
        day: 3,
        title: "Beach & Departure",
        activities: [
          "Morning beach relaxation",
          "Visit a turtle hatchery",
          "Return to Colombo",
          "Airport drop-off",
        ],
      },
    ],
  },
  {
    name: "Classic Sri Lanka Tour",
    image: sigiriyaImage,
    description: "Our most popular 6-day journey covering the cultural triangle, hill country highlights, and stunning southern coast—the complete Sri Lankan experience.",
    duration: "6 Days",
    price: 549,
    slug: "classic-tour",
    category: "classic",
    highlights: ["Sigiriya Rock", "Kandy Temple", "Whale Watching", "Galle Fort"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Negombo City",
        activities: [
          "Airport pickup and Negombo exploration",
          "Visit the famous Fish Market",
          "Explore the Dutch Church (St. Mary's Church)",
          "Boat ride on Hamilton Canal",
          "Evening beach walk",
        ],
      },
      {
        day: 2,
        title: "Sigiriya & Habarana",
        activities: [
          "Drive to Cultural Triangle",
          "Habarana jeep safari for elephants",
          "Climb Sigiriya Rock Fortress (UNESCO site)",
          "Explore the ancient frescoes and mirror wall",
          "Village tour with traditional lunch",
        ],
      },
      {
        day: 3,
        title: "Kandy - Cultural Capital",
        activities: [
          "Visit Dambulla Cave Temple en route",
          "Explore the Temple of the Sacred Tooth Relic",
          "Walk around Kandy Lake",
          "Evening Kandyan dance performance",
          "Shopping for local crafts",
        ],
      },
      {
        day: 4,
        title: "Botanical Garden & Down South",
        activities: [
          "Morning visit to Peradeniya Botanical Garden",
          "Scenic drive to the southern coast",
          "Whale watching in Mirissa",
          "See traditional stilt fishermen",
          "Explore Galle Fort at sunset",
        ],
      },
      {
        day: 5,
        title: "Southern Adventures",
        activities: [
          "Visit a turtle hatchery",
          "Madu River boat safari through mangroves",
          "See cinnamon islands and fish therapy",
          "Take the scenic sea train to Colombo",
          "Evening in Colombo",
        ],
      },
      {
        day: 6,
        title: "Colombo City Tour & Departure",
        activities: [
          "Colombo city tour highlights",
          "Visit National Museum or Pettah Market",
          "Last-minute shopping",
          "Airport drop-off",
        ],
      },
    ],
  },
  {
    name: "Grand Sri Lanka Explorer",
    image: kandyImage,
    description: "The ultimate 14-day adventure covering all major regions—from ancient cities to misty highlands, wildlife parks to pristine beaches.",
    duration: "14 Days",
    price: 1499,
    slug: "grand-explorer",
    category: "classic",
    highlights: ["All UNESCO Sites", "Hill Country Train", "Multiple Safaris", "Complete Coastal Experience"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        activities: [
          "Airport pickup",
          "Fish Market and Dutch Church visit",
          "Hamilton Canal boat ride",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Anuradhapura - Ancient Capital",
        activities: [
          "Drive to Anuradhapura",
          "Visit Sri Maha Bodhi (sacred Bo tree)",
          "Explore Ruwanwelisaya Stupa",
          "Tour ancient ruins and monasteries",
        ],
      },
      {
        day: 3,
        title: "Polonnaruwa & Minneriya",
        activities: [
          "Explore Polonnaruwa ancient city",
          "See the Gal Vihara Buddha statues",
          "Afternoon jeep safari at Minneriya",
          "Watch elephants gathering",
        ],
      },
      {
        day: 4,
        title: "Sigiriya & Dambulla",
        activities: [
          "Climb Sigiriya Rock Fortress",
          "Visit Dambulla Cave Temple",
          "Village tour with lunch",
          "Evening cultural experience",
        ],
      },
      {
        day: 5,
        title: "Kandy - Hill Capital",
        activities: [
          "Spice garden visit en route",
          "Temple of the Sacred Tooth Relic",
          "Kandy Lake walk",
          "Kandyan dance show",
        ],
      },
      {
        day: 6,
        title: "Nuwara Eliya",
        activities: [
          "Scenic train to Nanu Oya",
          "Tea factory visit and tasting",
          "Explore 'Little England'",
          "Gregory Lake and Victoria Park",
        ],
      },
      {
        day: 7,
        title: "Ella - Mountain Paradise",
        activities: [
          "Famous train ride to Ella",
          "Nine Arch Bridge visit",
          "Little Adam's Peak hike",
          "Ravana Falls photo stop",
        ],
      },
      {
        day: 8,
        title: "Ella Exploration",
        activities: [
          "Ella Rock sunrise hike",
          "Visit Demodara Loop",
          "Cooking class with locals",
          "Relaxation at cafes with mountain views",
        ],
      },
      {
        day: 9,
        title: "Yala National Park",
        activities: [
          "Drive to Yala region",
          "Afternoon game drive",
          "Leopard and elephant spotting",
          "Beach sunset near Tissamaharama",
        ],
      },
      {
        day: 10,
        title: "Yala & Mirissa",
        activities: [
          "Early morning safari",
          "Drive to Mirissa",
          "Beach relaxation",
          "Fresh seafood dinner",
        ],
      },
      {
        day: 11,
        title: "Whale Watching & Galle",
        activities: [
          "Early morning whale watching",
          "See blue whales and dolphins",
          "Explore Galle Fort",
          "Boutique shopping",
        ],
      },
      {
        day: 12,
        title: "Bentota Beach Day",
        activities: [
          "Transfer to Bentota",
          "Water sports options",
          "Madu River boat safari",
          "Turtle hatchery visit",
        ],
      },
      {
        day: 13,
        title: "Colombo",
        activities: [
          "Drive to Colombo",
          "Comprehensive city tour",
          "Shopping at Odel and local markets",
          "Farewell dinner",
        ],
      },
      {
        day: 14,
        title: "Departure",
        activities: [
          "Last-minute shopping if needed",
          "Airport transfer",
          "Departure assistance",
        ],
      },
    ],
  },

  // =============== BEACH & COASTAL ===============
  {
    name: "Southern Beach Paradise",
    image: heroImage,
    description: "A relaxing 5-day coastal escape featuring the best beaches of Sri Lanka's south coast, whale watching, and colonial heritage.",
    duration: "5 Days",
    price: 449,
    slug: "southern-paradise",
    category: "beach",
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort", "Stilt Fishing"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Bentota",
        activities: [
          "Airport pickup and coastal drive",
          "Check in to beach resort",
          "Bentota River boat safari",
          "Evening beach walk",
        ],
      },
      {
        day: 2,
        title: "Galle Fort Exploration",
        activities: [
          "Visit UNESCO Galle Fort",
          "Explore Dutch colonial architecture",
          "Lighthouse and ramparts walk",
          "Boutique shopping and cafes",
          "Beach time at Unawatuna",
        ],
      },
      {
        day: 3,
        title: "Whale Watching Day",
        activities: [
          "Early morning whale watching from Mirissa",
          "Spot blue whales, sperm whales, dolphins",
          "Beach relaxation at Mirissa",
          "See stilt fishermen at sunset",
        ],
      },
      {
        day: 4,
        title: "Beaches & Turtle Hatchery",
        activities: [
          "Visit turtle hatchery at Kosgoda",
          "Beach hopping - Hikkaduwa, Unawatuna",
          "Snorkeling options",
          "Seafood dinner by the beach",
        ],
      },
      {
        day: 5,
        title: "Madu River & Departure",
        activities: [
          "Morning Madu River boat safari",
          "See cinnamon islands",
          "Fish spa experience",
          "Return to airport",
        ],
      },
    ],
  },
  {
    name: "East Coast Discovery",
    image: surfingImage,
    description: "Explore Sri Lanka's pristine east coast—crystal clear waters, ancient temples, and laid-back beach vibes away from the crowds.",
    duration: "6 Days",
    price: 549,
    slug: "east-coast",
    category: "beach",
    highlights: ["Trincomalee", "Pigeon Island", "Pasikudah", "Arugam Bay"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Trincomalee",
        activities: [
          "Airport pickup and scenic drive east",
          "Check in at Trincomalee beach hotel",
          "Visit Koneswaram Temple",
          "Sunset at Marble Beach",
        ],
      },
      {
        day: 2,
        title: "Nilaveli & Pigeon Island",
        activities: [
          "Morning at Nilaveli Beach",
          "Boat trip to Pigeon Island",
          "Snorkeling with reef fish and turtles",
          "Beach relaxation",
        ],
      },
      {
        day: 3,
        title: "Whale Watching & Uppuveli",
        activities: [
          "Seasonal whale watching (May-Oct)",
          "Visit hot springs at Kanniya",
          "Explore Uppuveli beach",
          "Fresh seafood dinner",
        ],
      },
      {
        day: 4,
        title: "Pasikudah",
        activities: [
          "Drive to Pasikudah",
          "Swim in shallow turquoise waters",
          "Visit Batticaloa Fort",
          "See the 'singing fish' lagoon",
        ],
      },
      {
        day: 5,
        title: "Arugam Bay",
        activities: [
          "Transfer to Arugam Bay",
          "Famous surf beach experience",
          "Visit Elephant Rock",
          "Lagoon safari for crocodiles and birds",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Morning beach time",
          "Optional surf lesson",
          "Return drive to airport",
        ],
      },
    ],
  },

  // =============== HILL COUNTRY ===============
  {
    name: "Hill Country Escape",
    image: ellaImage,
    description: "Experience the cool highlands with scenic train rides, tea plantations, misty mountains, and charming colonial towns.",
    duration: "5 Days",
    price: 449,
    slug: "hill-country",
    category: "hillcountry",
    highlights: ["Scenic Train Rides", "Tea Plantations", "Ella Rock", "Nuwara Eliya"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Kandy - Gateway to Hills",
        activities: [
          "Airport pickup and drive to Kandy",
          "Visit Temple of the Tooth Relic",
          "Walk around Kandy Lake",
          "Evening Kandyan dance show",
        ],
      },
      {
        day: 2,
        title: "Nuwara Eliya",
        activities: [
          "Scenic train to Nanu Oya",
          "Tea factory visit with tasting",
          "Explore 'Little England' town",
          "Gregory Lake and gardens",
        ],
      },
      {
        day: 3,
        title: "Train to Ella",
        activities: [
          "World-famous train journey to Ella",
          "Pass through tea estates and bridges",
          "Settle into Ella village",
          "Nine Arch Bridge sunset",
        ],
      },
      {
        day: 4,
        title: "Ella Exploration",
        activities: [
          "Sunrise hike to Ella Rock or Little Adam's Peak",
          "Visit Ravana Falls",
          "Explore Demodara Nine Arch area",
          "Cooking class and relaxation",
        ],
      },
      {
        day: 5,
        title: "Departure via Scenic Route",
        activities: [
          "Morning tea plantation walk",
          "Drive through Haputale",
          "Lipton's Seat viewpoint (optional)",
          "Return to airport",
        ],
      },
    ],
  },
  {
    name: "Tea Trails & Waterfalls",
    image: ellaImage,
    description: "A 7-day immersive journey through Sri Lanka's tea country—colonial bungalows, stunning waterfalls, and breathtaking mountain scenery.",
    duration: "7 Days",
    price: 649,
    slug: "tea-trails",
    category: "hillcountry",
    highlights: ["Tea Bungalow Stay", "Major Waterfalls", "Horton Plains", "Knuckles Range"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Kandy Arrival",
        activities: [
          "Airport pickup and hill country drive",
          "Kandy Temple and lake",
          "Peradeniya Botanical Gardens",
          "Cultural show",
        ],
      },
      {
        day: 2,
        title: "Knuckles Mountain Range",
        activities: [
          "Drive to Knuckles region",
          "Guided nature trek",
          "See endemic flora and fauna",
          "Visit traditional villages",
        ],
      },
      {
        day: 3,
        title: "Nuwara Eliya",
        activities: [
          "Transfer to Nuwara Eliya",
          "Visit Hakgala Botanical Garden",
          "Explore colonial architecture",
          "Tea factory experience",
        ],
      },
      {
        day: 4,
        title: "Horton Plains",
        activities: [
          "Early morning drive to Horton Plains",
          "Trek to World's End viewpoint",
          "Baker's Falls visit",
          "Afternoon at leisure",
        ],
      },
      {
        day: 5,
        title: "Waterfalls Circuit",
        activities: [
          "Devon and St. Clair's Falls",
          "Drive to Ella region",
          "Diyaluma Falls visit",
          "Nine Arch Bridge sunset",
        ],
      },
      {
        day: 6,
        title: "Ella Day",
        activities: [
          "Little Adam's Peak sunrise",
          "Ravana Falls",
          "Ella Gap views",
          "Village cooking class",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Scenic drive through highlands",
          "Photo stops at tea estates",
          "Airport transfer",
        ],
      },
    ],
  },

  // =============== WILDLIFE & SAFARI ===============
  {
    name: "Wildlife Safari Adventure",
    image: yalaImage,
    description: "An action-packed 6-day wildlife experience across Sri Lanka's top national parks—spot leopards, elephants, and incredible birdlife.",
    duration: "6 Days",
    price: 649,
    slug: "wildlife-safari",
    category: "wildlife",
    highlights: ["Yala Leopards", "Minneriya Elephants", "Udawalawa", "Bundala Birds"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Habarana",
        activities: [
          "Airport pickup and drive north",
          "Settle in safari lodge",
          "Evening village tour",
          "Prepare for adventures ahead",
        ],
      },
      {
        day: 2,
        title: "Minneriya Safari",
        activities: [
          "Morning at leisure",
          "Afternoon safari at Minneriya/Kaudulla",
          "Famous elephant gathering (seasonal)",
          "Sunset game drive",
        ],
      },
      {
        day: 3,
        title: "Transfer to Yala Region",
        activities: [
          "Scenic drive to Yala",
          "Stop at Buduruwagala Buddha statues",
          "Check in near Yala",
          "Evening preparation for safari",
        ],
      },
      {
        day: 4,
        title: "Yala National Park",
        activities: [
          "Early morning game drive",
          "Search for leopards and sloth bears",
          "See elephants, crocodiles, deer",
          "Afternoon safari for more wildlife",
        ],
      },
      {
        day: 5,
        title: "Udawalawa & Bundala",
        activities: [
          "Transfer to Udawalawa region",
          "Udawalawa Elephant Transit Home",
          "Bundala National Park safari",
          "Flamingos and waterbirds",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Optional morning safari",
          "Coastal drive to airport",
          "Departure",
        ],
      },
    ],
  },
  {
    name: "Whale & Dolphin Expedition",
    image: whaleImage,
    description: "A 4-day marine adventure—witness the giants of the ocean, including blue whales, sperm whales, and playful dolphins.",
    duration: "4 Days",
    price: 399,
    slug: "whale-expedition",
    category: "wildlife",
    highlights: ["Blue Whales", "Dolphin Pods", "Mirissa", "Galle Fort"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Mirissa",
        activities: [
          "Airport pickup and coastal drive",
          "Check in at Mirissa beach hotel",
          "Evening beach walk",
          "Briefing for whale watching",
        ],
      },
      {
        day: 2,
        title: "Whale Watching Day 1",
        activities: [
          "Early 6 AM departure to sea",
          "4-5 hour whale watching expedition",
          "Spot blue whales, sperm whales",
          "Afternoon beach relaxation",
        ],
      },
      {
        day: 3,
        title: "Galle & Second Whale Trip",
        activities: [
          "Morning Galle Fort exploration",
          "Dutch colonial heritage walk",
          "Optional second whale watching trip",
          "Sunset at stilt fishermen location",
        ],
      },
      {
        day: 4,
        title: "Beach & Departure",
        activities: [
          "Morning at the beach",
          "Visit turtle hatchery",
          "Return to airport",
        ],
      },
    ],
  },

  // =============== RELIGIOUS & PILGRIMAGE ===============
  {
    name: "Sacred Sri Lanka Pilgrimage",
    image: kandyImage,
    description: "A 7-day spiritual journey visiting the most sacred Buddhist, Hindu, and multi-faith sites across the island.",
    duration: "7 Days",
    price: 599,
    slug: "sacred-pilgrimage",
    category: "religious",
    highlights: ["Temple of the Tooth", "Adam's Peak", "Anuradhapura", "Kataragama"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kelaniya",
        activities: [
          "Airport pickup",
          "Visit Kelaniya Raja Maha Viharaya",
          "One of the most sacred Buddhist temples",
          "Transfer to Negombo",
        ],
      },
      {
        day: 2,
        title: "Anuradhapura Sacred City",
        activities: [
          "Drive to Anuradhapura",
          "Visit Sri Maha Bodhi (2,300+ years old)",
          "Ruwanwelisaya Stupa",
          "Jaya Sri Maha Bodhi temple",
        ],
      },
      {
        day: 3,
        title: "Mihintale & Dambulla",
        activities: [
          "Climb Mihintale - birthplace of Buddhism in Sri Lanka",
          "Visit Dambulla Cave Temple",
          "Ancient Buddha statues and murals",
          "Transfer to Kandy",
        ],
      },
      {
        day: 4,
        title: "Kandy - Temple of the Tooth",
        activities: [
          "Morning puja at Temple of the Tooth Relic",
          "Explore the sacred temple complex",
          "Visit Bahiravakanda Buddha statue",
          "Evening temple rituals",
        ],
      },
      {
        day: 5,
        title: "Adam's Peak (Sri Pada)",
        activities: [
          "Transfer to Nallathanniya",
          "Rest before the climb",
          "Night climb to Adam's Peak (2 AM start)",
          "Witness sunrise at the sacred footprint",
        ],
      },
      {
        day: 6,
        title: "Kataragama",
        activities: [
          "Drive to Kataragama",
          "Multi-faith sacred site",
          "Buddhist, Hindu, and Muslim shrines",
          "Evening puja ceremonies",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Morning temple visit",
          "Scenic drive to airport",
          "Departure with blessings",
        ],
      },
    ],
  },
  {
    name: "Buddhist Heritage Trail",
    image: sigiriyaImage,
    description: "A 5-day journey through UNESCO World Heritage Buddhist sites—ancient cities, cave temples, and centuries-old stupas.",
    duration: "5 Days",
    price: 449,
    slug: "buddhist-heritage",
    category: "religious",
    highlights: ["UNESCO Sites", "Ancient Stupas", "Cave Temples", "Meditation"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Colombo to Anuradhapura",
        activities: [
          "Airport pickup",
          "Drive to Anuradhapura",
          "Evening visit to Ruwanwelisaya",
          "Meditation under the Bodhi tree",
        ],
      },
      {
        day: 2,
        title: "Anuradhapura Exploration",
        activities: [
          "Full day in sacred city",
          "Sri Maha Bodhi visitation",
          "Thuparamaya - oldest stupa",
          "Isurumuniya rock temple",
        ],
      },
      {
        day: 3,
        title: "Polonnaruwa",
        activities: [
          "Ancient city of Polonnaruwa",
          "Gal Vihara - rock-carved Buddhas",
          "Lankatilaka and Vatadage",
          "Quadrangle area exploration",
        ],
      },
      {
        day: 4,
        title: "Dambulla & Kandy",
        activities: [
          "Dambulla Cave Temple visit",
          "Five caves with 150+ Buddha statues",
          "Transfer to Kandy",
          "Temple of the Tooth evening puja",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Morning temple visit",
          "Peradeniya Botanical Gardens",
          "Return to airport",
        ],
      },
    ],
  },

  // =============== ADVENTURE ===============
  {
    name: "Adrenaline Rush Adventure",
    image: surfingImage,
    description: "A 6-day action-packed adventure—white-water rafting, hiking, cycling, and water sports for thrill-seekers.",
    duration: "6 Days",
    price: 699,
    slug: "adrenaline-rush",
    category: "adventure",
    highlights: ["White-water Rafting", "Rock Climbing", "Surfing", "Jungle Trekking"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kitulgala",
        activities: [
          "Airport pickup and drive to Kitulgala",
          "Settle in jungle lodge",
          "Evening nature walk",
          "Briefing for rafting",
        ],
      },
      {
        day: 2,
        title: "White-water Rafting",
        activities: [
          "Full-day rafting on Kelani River",
          "Grade 3-4 rapids",
          "Cliff jumping spots",
          "Jungle trekking",
        ],
      },
      {
        day: 3,
        title: "Ella Adventures",
        activities: [
          "Transfer to Ella",
          "Ella Rock hike",
          "Flying Ravana zip-line",
          "Nine Arch Bridge exploration",
        ],
      },
      {
        day: 4,
        title: "Hiking & Cycling",
        activities: [
          "Little Adam's Peak sunrise",
          "Mountain biking through tea estates",
          "Waterfall abseiling (optional)",
          "Evening cooking class",
        ],
      },
      {
        day: 5,
        title: "Arugam Bay Surfing",
        activities: [
          "Transfer to Arugam Bay",
          "Surf lessons or free surfing",
          "Beach relaxation",
          "Sunset surf session",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Morning beach time",
          "Optional extra surf session",
          "Return to airport",
        ],
      },
    ],
  },
  {
    name: "Trekking & Nature Expedition",
    image: ellaImage,
    description: "A 7-day nature lover's dream—trek through rainforests, climb peaks, explore national parks, and discover hidden waterfalls.",
    duration: "7 Days",
    price: 649,
    slug: "trekking-expedition",
    category: "adventure",
    highlights: ["Knuckles Range", "Sinharaja Rainforest", "Horton Plains", "Adam's Peak"],
    transportOptions: defaultTransportOptions,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kandy",
        activities: [
          "Airport pickup",
          "Drive to Kandy",
          "Briefing and gear check",
          "Light evening walk",
        ],
      },
      {
        day: 2,
        title: "Knuckles Mountain Range",
        activities: [
          "Transfer to Knuckles",
          "Full-day guided trek",
          "See cloud forests and waterfalls",
          "Camp or lodge stay",
        ],
      },
      {
        day: 3,
        title: "Knuckles Exploration",
        activities: [
          "Continue Knuckles trek",
          "Mini World's End viewpoint",
          "Endemic wildlife spotting",
          "Village interaction",
        ],
      },
      {
        day: 4,
        title: "Horton Plains",
        activities: [
          "Transfer to Nuwara Eliya area",
          "Early trek to Horton Plains",
          "World's End cliff viewpoint",
          "Baker's Falls",
        ],
      },
      {
        day: 5,
        title: "Sinharaja Rainforest",
        activities: [
          "Drive to Sinharaja",
          "UNESCO rainforest trek",
          "Endemic birds and wildlife",
          "Night sounds walk",
        ],
      },
      {
        day: 6,
        title: "Adam's Peak",
        activities: [
          "Rest during the day",
          "Night climb to Adam's Peak (2 AM)",
          "Sunrise at the summit",
          "Descend and rest",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Recovery morning",
          "Scenic drive to airport",
          "Departure",
        ],
      },
    ],
  },
];