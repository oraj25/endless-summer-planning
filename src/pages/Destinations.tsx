import { Section, SectionHeader } from "@/components/ui/section";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import heroImage from "@/assets/hero-beach.jpg";

// Destination data organized by category with Wikipedia links
const destinationsByCategory = {
  "Cultural & Historical": {
    icon: "🏛️",
    destinations: [
      { name: "Anuradhapura", wikiUrl: "https://en.wikipedia.org/wiki/Anuradhapura" },
      { name: "Polonnaruwa", wikiUrl: "https://en.wikipedia.org/wiki/Polonnaruwa" },
      { name: "Sigiriya Rock Fortress", wikiUrl: "https://en.wikipedia.org/wiki/Sigiriya" },
      { name: "Dambulla Cave Temple", wikiUrl: "https://en.wikipedia.org/wiki/Dambulla_cave_temple" },
      { name: "Kandy (Temple of the Tooth)", wikiUrl: "https://en.wikipedia.org/wiki/Temple_of_the_Tooth" },
      { name: "Mihintale", wikiUrl: "https://en.wikipedia.org/wiki/Mihintale" },
      { name: "Yapahuwa", wikiUrl: "https://en.wikipedia.org/wiki/Yapahuwa" },
      { name: "Ritigala", wikiUrl: "https://en.wikipedia.org/wiki/Ritigala" },
      { name: "Nalanda Gedige", wikiUrl: "https://en.wikipedia.org/wiki/Nalanda_Gedige" },
      { name: "Medirigiriya Vatadage", wikiUrl: "https://en.wikipedia.org/wiki/Medirigiriya" },
      { name: "Aukana Buddha Statue", wikiUrl: "https://en.wikipedia.org/wiki/Aukana_Buddha_statue" },
      { name: "Buduruwagala", wikiUrl: "https://en.wikipedia.org/wiki/Buduruwagala" },
      { name: "Aluvihare Rock Temple", wikiUrl: "https://en.wikipedia.org/wiki/Aluvihare_Rock_Temple" },
      { name: "Somawathiya", wikiUrl: "https://en.wikipedia.org/wiki/Somawathiya_National_Park" },
      { name: "Kataragama", wikiUrl: "https://en.wikipedia.org/wiki/Kataragama" },
      { name: "Mahiyanganaya", wikiUrl: "https://en.wikipedia.org/wiki/Mahiyanganaya" },
      { name: "Deegavapi", wikiUrl: "https://en.wikipedia.org/wiki/Dighavapi" },
      { name: "Tissamaharama", wikiUrl: "https://en.wikipedia.org/wiki/Tissamaharama" },
      { name: "Jaffna Fort", wikiUrl: "https://en.wikipedia.org/wiki/Jaffna_Fort" },
      { name: "Galle Fort", wikiUrl: "https://en.wikipedia.org/wiki/Galle_Fort" },
      { name: "Dutch Fort Kalpitiya", wikiUrl: "https://en.wikipedia.org/wiki/Kalpitiya" },
      { name: "Dutch Fort Batticaloa", wikiUrl: "https://en.wikipedia.org/wiki/Batticaloa_Fort" },
      { name: "Dutch Fort Trincomalee", wikiUrl: "https://en.wikipedia.org/wiki/Fort_Frederick_(Sri_Lanka)" },
    ],
  },
  "Beach & Coastal - West & South": {
    icon: "🏖️",
    destinations: [
      { name: "Negombo", wikiUrl: "https://en.wikipedia.org/wiki/Negombo" },
      { name: "Mount Lavinia", wikiUrl: "https://en.wikipedia.org/wiki/Mount_Lavinia" },
      { name: "Wadduwa", wikiUrl: "https://en.wikipedia.org/wiki/Wadduwa" },
      { name: "Kalutara", wikiUrl: "https://en.wikipedia.org/wiki/Kalutara" },
      { name: "Bentota", wikiUrl: "https://en.wikipedia.org/wiki/Bentota" },
      { name: "Beruwala", wikiUrl: "https://en.wikipedia.org/wiki/Beruwala" },
      { name: "Aluthgama", wikiUrl: "https://en.wikipedia.org/wiki/Aluthgama" },
      { name: "Hikkaduwa", wikiUrl: "https://en.wikipedia.org/wiki/Hikkaduwa" },
      { name: "Unawatuna", wikiUrl: "https://en.wikipedia.org/wiki/Unawatuna" },
      { name: "Thalpe", wikiUrl: "https://en.wikipedia.org/wiki/Thalpe" },
      { name: "Ahangama", wikiUrl: "https://en.wikipedia.org/wiki/Ahangama" },
      { name: "Koggala", wikiUrl: "https://en.wikipedia.org/wiki/Koggala" },
      { name: "Weligama", wikiUrl: "https://en.wikipedia.org/wiki/Weligama" },
      { name: "Mirissa", wikiUrl: "https://en.wikipedia.org/wiki/Mirissa" },
      { name: "Polhena", wikiUrl: "https://en.wikipedia.org/wiki/Polhena" },
      { name: "Dickwella", wikiUrl: "https://en.wikipedia.org/wiki/Dickwella" },
      { name: "Tangalle", wikiUrl: "https://en.wikipedia.org/wiki/Tangalle" },
      { name: "Rekawa", wikiUrl: "https://en.wikipedia.org/wiki/Rekawa" },
    ],
  },
  "Beach & Coastal - East": {
    icon: "🌊",
    destinations: [
      { name: "Trincomalee", wikiUrl: "https://en.wikipedia.org/wiki/Trincomalee" },
      { name: "Nilaveli", wikiUrl: "https://en.wikipedia.org/wiki/Nilaveli" },
      { name: "Uppuveli", wikiUrl: "https://en.wikipedia.org/wiki/Uppuveli" },
      { name: "Marble Beach", wikiUrl: "https://en.wikipedia.org/wiki/Trincomalee" },
      { name: "Pasikudah", wikiUrl: "https://en.wikipedia.org/wiki/Pasikuda" },
      { name: "Kalkudah", wikiUrl: "https://en.wikipedia.org/wiki/Kalkudah" },
      { name: "Batticaloa", wikiUrl: "https://en.wikipedia.org/wiki/Batticaloa" },
      { name: "Arugam Bay", wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay" },
      { name: "Pottuvil", wikiUrl: "https://en.wikipedia.org/wiki/Pottuvil" },
      { name: "Panama", wikiUrl: "https://en.wikipedia.org/wiki/Panama,_Sri_Lanka" },
    ],
  },
  "Beach & Coastal - North": {
    icon: "🐚",
    destinations: [
      { name: "Kalpitiya", wikiUrl: "https://en.wikipedia.org/wiki/Kalpitiya" },
      { name: "Mannar", wikiUrl: "https://en.wikipedia.org/wiki/Mannar,_Sri_Lanka" },
      { name: "Thalaimannar", wikiUrl: "https://en.wikipedia.org/wiki/Talaimannar" },
      { name: "Point Pedro", wikiUrl: "https://en.wikipedia.org/wiki/Point_Pedro" },
    ],
  },
  "Hill Country & Scenic": {
    icon: "⛰️",
    destinations: [
      { name: "Nuwara Eliya", wikiUrl: "https://en.wikipedia.org/wiki/Nuwara_Eliya" },
      { name: "Ella", wikiUrl: "https://en.wikipedia.org/wiki/Ella,_Sri_Lanka" },
      { name: "Bandarawela", wikiUrl: "https://en.wikipedia.org/wiki/Bandarawela" },
      { name: "Haputale", wikiUrl: "https://en.wikipedia.org/wiki/Haputale" },
      { name: "Badulla", wikiUrl: "https://en.wikipedia.org/wiki/Badulla" },
      { name: "Ohiya", wikiUrl: "https://en.wikipedia.org/wiki/Ohiya" },
      { name: "Hatton", wikiUrl: "https://en.wikipedia.org/wiki/Hatton,_Sri_Lanka" },
      { name: "Talawakele", wikiUrl: "https://en.wikipedia.org/wiki/Talawakelle" },
      { name: "Lindula", wikiUrl: "https://en.wikipedia.org/wiki/Lindula" },
      { name: "Agrapatana", wikiUrl: "https://en.wikipedia.org/wiki/Agarapathana" },
      { name: "Diyatalawa", wikiUrl: "https://en.wikipedia.org/wiki/Diyatalawa" },
      { name: "Namunukula", wikiUrl: "https://en.wikipedia.org/wiki/Namunukula" },
      { name: "Riverston", wikiUrl: "https://en.wikipedia.org/wiki/Riverston" },
      { name: "Knuckles Viewpoints", wikiUrl: "https://en.wikipedia.org/wiki/Knuckles_Mountain_Range" },
      { name: "Horton Plains", wikiUrl: "https://en.wikipedia.org/wiki/Horton_Plains_National_Park" },
      { name: "World's End", wikiUrl: "https://en.wikipedia.org/wiki/World%27s_End_(Sri_Lanka)" },
      { name: "Mini World's End", wikiUrl: "https://en.wikipedia.org/wiki/Horton_Plains_National_Park" },
    ],
  },
  "National Parks & Wildlife": {
    icon: "🌲",
    destinations: [
      { name: "Yala National Park", wikiUrl: "https://en.wikipedia.org/wiki/Yala_National_Park" },
      { name: "Wilpattu National Park", wikiUrl: "https://en.wikipedia.org/wiki/Wilpattu_National_Park" },
      { name: "Udawalawa National Park", wikiUrl: "https://en.wikipedia.org/wiki/Udawalawe_National_Park" },
      { name: "Minneriya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Minneriya_National_Park" },
      { name: "Kaudulla National Park", wikiUrl: "https://en.wikipedia.org/wiki/Kaudulla_National_Park" },
      { name: "Wasgamuwa National Park", wikiUrl: "https://en.wikipedia.org/wiki/Wasgamuwa_National_Park" },
      { name: "Gal Oya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Gal_Oya_National_Park" },
      { name: "Bundala National Park", wikiUrl: "https://en.wikipedia.org/wiki/Bundala_National_Park" },
      { name: "Lunugamvehera National Park", wikiUrl: "https://en.wikipedia.org/wiki/Lunugamvehera_National_Park" },
      { name: "Maduru Oya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Maduru_Oya_National_Park" },
      { name: "Lahugala National Park", wikiUrl: "https://en.wikipedia.org/wiki/Lahugala_Kitulana_National_Park" },
      { name: "Kumana National Park", wikiUrl: "https://en.wikipedia.org/wiki/Kumana_National_Park" },
      { name: "Somawathiya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Somawathiya_National_Park" },
    ],
  },
  "Forests, Rainforests & Nature": {
    icon: "🌳",
    destinations: [
      { name: "Sinharaja Rainforest", wikiUrl: "https://en.wikipedia.org/wiki/Sinharaja_Forest_Reserve" },
      { name: "Knuckles Forest Reserve", wikiUrl: "https://en.wikipedia.org/wiki/Knuckles_Mountain_Range" },
      { name: "Makandawa Forest", wikiUrl: "https://en.wikipedia.org/wiki/Makandawa_Forest" },
      { name: "Hantana Mountain Range", wikiUrl: "https://en.wikipedia.org/wiki/Hantana_Mountain_Range" },
      { name: "Meemure", wikiUrl: "https://en.wikipedia.org/wiki/Meemure" },
      { name: "Belihuloya", wikiUrl: "https://en.wikipedia.org/wiki/Belihuloya" },
      { name: "Bambarakanda Area", wikiUrl: "https://en.wikipedia.org/wiki/Bambarakanda_Falls" },
      { name: "Kalawana", wikiUrl: "https://en.wikipedia.org/wiki/Kalawana" },
      { name: "Peak Wilderness Sanctuary", wikiUrl: "https://en.wikipedia.org/wiki/Peak_Wilderness_Sanctuary" },
    ],
  },
  "Waterfalls": {
    icon: "💦",
    destinations: [
      { name: "Bambarakanda Falls", wikiUrl: "https://en.wikipedia.org/wiki/Bambarakanda_Falls" },
      { name: "Diyaluma Falls", wikiUrl: "https://en.wikipedia.org/wiki/Diyaluma_Falls" },
      { name: "Dunhinda Falls", wikiUrl: "https://en.wikipedia.org/wiki/Dunhinda_Falls" },
      { name: "Ravana Falls", wikiUrl: "https://en.wikipedia.org/wiki/Ravana_Falls" },
      { name: "St. Clair's Falls", wikiUrl: "https://en.wikipedia.org/wiki/St._Clair%27s_Falls" },
      { name: "Devon Falls", wikiUrl: "https://en.wikipedia.org/wiki/Devon_Falls" },
      { name: "Aberdeen Falls", wikiUrl: "https://en.wikipedia.org/wiki/Aberdeen_Falls" },
      { name: "Baker's Falls", wikiUrl: "https://en.wikipedia.org/wiki/Baker%27s_Falls" },
      { name: "Galboda Falls", wikiUrl: "https://en.wikipedia.org/wiki/Galboda_Falls" },
    ],
  },
  "Islands & Special Places": {
    icon: "🏝️",
    destinations: [
      { name: "Delft Island", wikiUrl: "https://en.wikipedia.org/wiki/Delft_Island" },
      { name: "Pigeon Island", wikiUrl: "https://en.wikipedia.org/wiki/Pigeon_Island_National_Park" },
      { name: "Mannar Island", wikiUrl: "https://en.wikipedia.org/wiki/Mannar_Island" },
      { name: "Kayts Island", wikiUrl: "https://en.wikipedia.org/wiki/Kayts" },
      { name: "Nagadeepa", wikiUrl: "https://en.wikipedia.org/wiki/Nainativu" },
      { name: "Adam's Bridge (Rama Setu)", wikiUrl: "https://en.wikipedia.org/wiki/Adam%27s_Bridge" },
      { name: "Maduganga", wikiUrl: "https://en.wikipedia.org/wiki/Madu_River" },
      { name: "Bolgoda Lake", wikiUrl: "https://en.wikipedia.org/wiki/Bolgoda_Lake" },
      { name: "Gregory Lake", wikiUrl: "https://en.wikipedia.org/wiki/Gregory_Lake" },
    ],
  },
  "Religious & Pilgrimage": {
    icon: "🕌",
    destinations: [
      { name: "Sri Pada (Adam's Peak)", wikiUrl: "https://en.wikipedia.org/wiki/Adam%27s_Peak" },
      { name: "Kataragama Temple", wikiUrl: "https://en.wikipedia.org/wiki/Kataragama_temple" },
      { name: "Nagadeepa Temple", wikiUrl: "https://en.wikipedia.org/wiki/Nagadeepa_Purana_Viharaya" },
      { name: "Munneswaram Temple", wikiUrl: "https://en.wikipedia.org/wiki/Munneswaram_Temple" },
      { name: "St. Anne's Shrine (Talawila)", wikiUrl: "https://en.wikipedia.org/wiki/Shrine_of_Our_Lady_of_Madhu" },
      { name: "Kelaniya Raja Maha Viharaya", wikiUrl: "https://en.wikipedia.org/wiki/Kelaniya_Raja_Maha_Vihara" },
      { name: "Nallur Kovil", wikiUrl: "https://en.wikipedia.org/wiki/Nallur_Kandaswamy_Kovil" },
      { name: "Dondra Devinuwara", wikiUrl: "https://en.wikipedia.org/wiki/Dondra" },
    ],
  },
  "Cities & Urban Tourism": {
    icon: "🏙️",
    destinations: [
      { name: "Colombo", wikiUrl: "https://en.wikipedia.org/wiki/Colombo" },
      { name: "Galle", wikiUrl: "https://en.wikipedia.org/wiki/Galle" },
      { name: "Kandy", wikiUrl: "https://en.wikipedia.org/wiki/Kandy" },
      { name: "Jaffna", wikiUrl: "https://en.wikipedia.org/wiki/Jaffna" },
      { name: "Trincomalee", wikiUrl: "https://en.wikipedia.org/wiki/Trincomalee" },
      { name: "Batticaloa", wikiUrl: "https://en.wikipedia.org/wiki/Batticaloa" },
      { name: "Matara", wikiUrl: "https://en.wikipedia.org/wiki/Matara,_Sri_Lanka" },
      { name: "Hambantota", wikiUrl: "https://en.wikipedia.org/wiki/Hambantota" },
      { name: "Kurunegala", wikiUrl: "https://en.wikipedia.org/wiki/Kurunegala" },
      { name: "Ratnapura", wikiUrl: "https://en.wikipedia.org/wiki/Ratnapura" },
      { name: "Badulla", wikiUrl: "https://en.wikipedia.org/wiki/Badulla" },
      { name: "Anuradhapura", wikiUrl: "https://en.wikipedia.org/wiki/Anuradhapura" },
      { name: "Polonnaruwa", wikiUrl: "https://en.wikipedia.org/wiki/Polonnaruwa" },
    ],
  },
  "Adventure & Activities": {
    icon: "🚣",
    destinations: [
      { name: "Kitulgala (White-water Rafting)", wikiUrl: "https://en.wikipedia.org/wiki/Kitulgala" },
      { name: "Ella (Hiking)", wikiUrl: "https://en.wikipedia.org/wiki/Ella,_Sri_Lanka" },
      { name: "Meemure (Trekking)", wikiUrl: "https://en.wikipedia.org/wiki/Meemure" },
      { name: "Arugam Bay (Surfing)", wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay" },
      { name: "Kalpitiya (Kitesurfing & Dolphins)", wikiUrl: "https://en.wikipedia.org/wiki/Kalpitiya" },
      { name: "Mirissa (Whale Watching)", wikiUrl: "https://en.wikipedia.org/wiki/Mirissa" },
      { name: "Trincomalee (Whale Watching)", wikiUrl: "https://en.wikipedia.org/wiki/Trincomalee" },
      { name: "Habarana (Safari Hub)", wikiUrl: "https://en.wikipedia.org/wiki/Habarana" },
    ],
  },
};

// Featured destinations with images
const featuredDestinations = [
  {
    name: "Sigiriya Rock Fortress",
    image: sigiriyaImage,
    description: "The iconic Lion Rock fortress, a UNESCO World Heritage site rising 200 meters above the jungle.",
    wikiUrl: "https://en.wikipedia.org/wiki/Sigiriya",
  },
  {
    name: "Ella",
    image: ellaImage,
    description: "A scenic hill country paradise famous for the Nine Arch Bridge and breathtaking hiking trails.",
    wikiUrl: "https://en.wikipedia.org/wiki/Ella,_Sri_Lanka",
  },
  {
    name: "Galle Fort",
    image: galleImage,
    description: "A historic Dutch fort city on the southern coast with colonial architecture and ocean views.",
    wikiUrl: "https://en.wikipedia.org/wiki/Galle_Fort",
  },
  {
    name: "Kandy",
    image: kandyImage,
    description: "The sacred hill capital home to the Temple of the Tooth and traditional dance performances.",
    wikiUrl: "https://en.wikipedia.org/wiki/Kandy",
  },
  {
    name: "Yala National Park",
    image: yalaImage,
    description: "Sri Lanka's premier wildlife sanctuary with the highest density of leopards in the world.",
    wikiUrl: "https://en.wikipedia.org/wiki/Yala_National_Park",
  },
  {
    name: "Arugam Bay",
    image: heroImage,
    description: "World-renowned surfing destination with consistent waves and laid-back beach vibes.",
    wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay",
  },
];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sigiriyaImage}
            alt="Sri Lanka destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Explore
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Destinations
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            From ancient temples to tropical beaches, discover the diverse wonders of Sri Lanka
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      <Section>
        <SectionHeader
          subtitle="Featured"
          title="Must-Visit Destinations"
          description="Start your journey with these iconic locations that showcase the best of Sri Lanka."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.name} {...destination} />
          ))}
        </div>
      </Section>

      {/* All Destinations by Category */}
      <Section className="bg-muted">
        <SectionHeader
          subtitle="All Locations"
          title="Explore by Category"
          description="Browse our complete list of destinations across all categories in Sri Lanka."
        />
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            size="sm"
          >
            All Categories
          </Button>
          {Object.keys(destinationsByCategory).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {destinationsByCategory[category as keyof typeof destinationsByCategory].icon} {category}
            </Button>
          ))}
        </div>

        {/* Category Sections */}
        <div className="space-y-12">
          {Object.entries(destinationsByCategory)
            .filter(([category]) => activeCategory === null || activeCategory === category)
            .map(([category, data]) => (
              <div key={category} className="bg-background rounded-2xl p-6 md:p-8 shadow-card">
                <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">{data.icon}</span>
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {data.destinations.map((dest) => (
                    <a
                      key={dest.name}
                      href={dest.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium text-center"
                    >
                      {dest.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Destinations;