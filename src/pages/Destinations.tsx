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

// Destination data organized by province
const destinationsByProvince = {
  "Western Province": {
    icon: "🌴",
    destinations: [
      // Colombo District
      { name: "Colombo", slug: "colombo" },
      { name: "Fort", slug: "fort" },
      { name: "Pettah", slug: "pettah" },
      { name: "Galle Face", slug: "galle-face" },
      { name: "Cinnamon Gardens", slug: "cinnamon-gardens" },
      { name: "Mount Lavinia", slug: "mount-lavinia" },
      { name: "Dehiwala", slug: "dehiwala" },
      { name: "Wellawatte", slug: "wellawatte" },
      { name: "Bambalapitiya", slug: "bambalapitiya" },
      // Gampaha District
      { name: "Negombo", slug: "negombo" },
      { name: "Katunayake", slug: "katunayake" },
      { name: "Wattala", slug: "wattala" },
      { name: "Ja-Ela", slug: "ja-ela" },
      { name: "Kelaniya", slug: "kelaniya" },
      { name: "Mirigama", slug: "mirigama" },
      { name: "Minuwangoda", slug: "minuwangoda" },
      { name: "Divulapitiya", slug: "divulapitiya" },
      // Kalutara District
      { name: "Kalutara", slug: "kalutara" },
      { name: "Wadduwa", slug: "wadduwa" },
      { name: "Panadura", slug: "panadura" },
      { name: "Beruwala", slug: "beruwala" },
      { name: "Bentota", slug: "bentota" },
      { name: "Aluthgama", slug: "aluthgama" },
    ],
  },
  "Southern Province": {
    icon: "🌊",
    destinations: [
      // Galle District
      { name: "Galle", slug: "galle" },
      { name: "Galle Fort", slug: "galle-fort" },
      { name: "Unawatuna", slug: "unawatuna" },
      { name: "Thalpe", slug: "thalpe" },
      { name: "Hikkaduwa", slug: "hikkaduwa" },
      { name: "Ahangama", slug: "ahangama" },
      { name: "Koggala", slug: "koggala" },
      { name: "Weligama", slug: "weligama" },
      // Matara District
      { name: "Matara", slug: "matara" },
      { name: "Mirissa", slug: "mirissa" },
      { name: "Polhena", slug: "polhena" },
      { name: "Dondra", slug: "dondra" },
      { name: "Devinuwara", slug: "devinuwara" },
      { name: "Dickwella", slug: "dickwella" },
      // Hambantota District
      { name: "Hambantota", slug: "hambantota" },
      { name: "Tangalle", slug: "tangalle" },
      { name: "Rekawa", slug: "rekawa" },
      { name: "Tissamaharama", slug: "tissamaharama" },
      { name: "Kataragama", slug: "kataragama" },
      { name: "Bundala", slug: "bundala" },
    ],
  },
  "Central Province": {
    icon: "⛰️",
    destinations: [
      // Kandy District
      { name: "Kandy", slug: "kandy" },
      { name: "Peradeniya", slug: "peradeniya" },
      { name: "Digana", slug: "digana" },
      { name: "Kundasale", slug: "kundasale" },
      { name: "Katugastota", slug: "katugastota" },
      { name: "Udunuwara", slug: "udunuwara" },
      // Matale District
      { name: "Matale", slug: "matale" },
      { name: "Dambulla", slug: "dambulla" },
      { name: "Sigiriya", slug: "sigiriya" },
      { name: "Habarana", slug: "habarana" },
      { name: "Riverston", slug: "riverston" },
      { name: "Nalanda Gedige", slug: "nalanda-gedige" },
      // Nuwara Eliya District
      { name: "Nuwara Eliya", slug: "nuwara-eliya" },
      { name: "Hatton", slug: "hatton" },
      { name: "Talawakele", slug: "talawakele" },
      { name: "Lindula", slug: "lindula" },
      { name: "Agrapatana", slug: "agrapatana" },
      { name: "Horton Plains", slug: "horton-plains" },
      { name: "Ohiya", slug: "ohiya" },
    ],
  },
  "North Central Province": {
    icon: "🏞️",
    destinations: [
      // Anuradhapura District
      { name: "Anuradhapura", slug: "anuradhapura" },
      { name: "Mihintale", slug: "mihintale" },
      { name: "Tambuttegama", slug: "tambuttegama" },
      { name: "Medawachchiya", slug: "medawachchiya" },
      { name: "Padaviya", slug: "padaviya" },
      // Polonnaruwa District
      { name: "Polonnaruwa", slug: "polonnaruwa" },
      { name: "Kaduruwela", slug: "kaduruwela" },
      { name: "Hingurakgoda", slug: "hingurakgoda" },
      { name: "Medirigiriya", slug: "medirigiriya" },
      { name: "Somawathiya", slug: "somawathiya" },
    ],
  },
  "Eastern Province": {
    icon: "🐘",
    destinations: [
      // Trincomalee District
      { name: "Trincomalee", slug: "trincomalee" },
      { name: "Nilaveli", slug: "nilaveli" },
      { name: "Uppuveli", slug: "uppuveli" },
      { name: "Kinniya", slug: "kinniya" },
      { name: "Marble Beach", slug: "marble-beach" },
      // Batticaloa District
      { name: "Batticaloa", slug: "batticaloa" },
      { name: "Kalkudah", slug: "kalkudah" },
      { name: "Pasikudah", slug: "pasikudah" },
      { name: "Valaichchenai", slug: "valaichchenai" },
      // Ampara District
      { name: "Ampara", slug: "ampara" },
      { name: "Arugam Bay", slug: "arugam-bay" },
      { name: "Pottuvil", slug: "pottuvil" },
      { name: "Lahugala", slug: "lahugala" },
      { name: "Deegavapi", slug: "deegavapi" },
    ],
  },
  "Northern Province": {
    icon: "🌾",
    destinations: [
      // Jaffna District
      { name: "Jaffna", slug: "jaffna" },
      { name: "Nallur", slug: "nallur" },
      { name: "Chavakachcheri", slug: "chavakachcheri" },
      { name: "Point Pedro", slug: "point-pedro" },
      { name: "Keerimalai", slug: "keerimalai" },
      // Kilinochchi District
      { name: "Kilinochchi", slug: "kilinochchi" },
      { name: "Iranamadu", slug: "iranamadu" },
      // Mannar District
      { name: "Mannar", slug: "mannar" },
      { name: "Adam's Bridge (Rama Setu)", slug: "adams-bridge" },
      { name: "Thalaimannar", slug: "thalaimannar" },
      // Mullaitivu District
      { name: "Mullaitivu", slug: "mullaitivu" },
      { name: "Nayaru", slug: "nayaru" },
      // Vavuniya District
      { name: "Vavuniya", slug: "vavuniya" },
      { name: "Cheddikulam", slug: "cheddikulam" },
    ],
  },
  "Uva Province": {
    icon: "🌄",
    destinations: [
      // Badulla District
      { name: "Badulla", slug: "badulla" },
      { name: "Ella", slug: "ella" },
      { name: "Bandarawela", slug: "bandarawela" },
      { name: "Hali Ela", slug: "hali-ela" },
      { name: "Diyatalawa", slug: "diyatalawa" },
      { name: "Passara", slug: "passara" },
      // Monaragala District
      { name: "Monaragala", slug: "monaragala" },
      { name: "Wellawaya", slug: "wellawaya" },
      { name: "Buttala", slug: "buttala" },
      { name: "Bibile", slug: "bibile" },
    ],
  },
  "Sabaragamuwa Province": {
    icon: "🌿",
    destinations: [
      // Ratnapura District
      { name: "Ratnapura", slug: "ratnapura" },
      { name: "Balangoda", slug: "balangoda" },
      { name: "Kalawana", slug: "kalawana" },
      { name: "Sinharaja", slug: "sinharaja" },
      { name: "Udawalawa", slug: "udawalawa" },
      // Kegalle District
      { name: "Kegalle", slug: "kegalle" },
      { name: "Kitulgala", slug: "kitulgala" },
      { name: "Mawanella", slug: "mawanella" },
      { name: "Yatiyantota", slug: "yatiyantota" },
      { name: "Pinnawala", slug: "pinnawala" },
    ],
  },
  "National Parks & Nature": {
    icon: "🐆",
    destinations: [
      { name: "Yala National Park", slug: "yala-national-park" },
      { name: "Wilpattu National Park", slug: "wilpattu-national-park" },
      { name: "Udawalawa National Park", slug: "udawalawa-national-park" },
      { name: "Minneriya National Park", slug: "minneriya-national-park" },
      { name: "Kaudulla National Park", slug: "kaudulla-national-park" },
      { name: "Horton Plains", slug: "horton-plains-np" },
      { name: "Sinharaja Rainforest", slug: "sinharaja-rainforest" },
      { name: "Bundala National Park", slug: "bundala-national-park" },
      { name: "Gal Oya National Park", slug: "gal-oya-national-park" },
      { name: "Wasgamuwa National Park", slug: "wasgamuwa-national-park" },
      { name: "Lunugamvehera National Park", slug: "lunugamvehera-national-park" },
    ],
  },
  "Popular Beaches": {
    icon: "🏖️",
    destinations: [
      { name: "Negombo Beach", slug: "negombo-beach" },
      { name: "Bentota Beach", slug: "bentota-beach" },
      { name: "Hikkaduwa Beach", slug: "hikkaduwa-beach" },
      { name: "Unawatuna Beach", slug: "unawatuna-beach" },
      { name: "Mirissa Beach", slug: "mirissa-beach" },
      { name: "Tangalle Beach", slug: "tangalle-beach" },
      { name: "Nilaveli Beach", slug: "nilaveli-beach" },
      { name: "Pasikudah Beach", slug: "pasikudah-beach" },
      { name: "Arugam Bay Beach", slug: "arugam-bay-beach" },
      { name: "Kalpitiya", slug: "kalpitiya" },
    ],
  },
};

// Featured destinations with images
const featuredDestinations = [
  {
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "The iconic Lion Rock fortress, a UNESCO World Heritage site rising 200 meters above the jungle.",
    slug: "sigiriya",
  },
  {
    name: "Ella",
    image: ellaImage,
    description: "A scenic hill country paradise famous for the Nine Arch Bridge and breathtaking hiking trails.",
    slug: "ella",
  },
  {
    name: "Galle",
    image: galleImage,
    description: "A historic Dutch fort city on the southern coast with colonial architecture and ocean views.",
    slug: "galle",
  },
  {
    name: "Kandy",
    image: kandyImage,
    description: "The sacred hill capital home to the Temple of the Tooth and traditional dance performances.",
    slug: "kandy",
  },
  {
    name: "Yala National Park",
    image: yalaImage,
    description: "Sri Lanka's premier wildlife sanctuary with the highest density of leopards in the world.",
    slug: "yala-national-park",
  },
  {
    name: "Mirissa",
    image: heroImage,
    description: "A tropical beach paradise perfect for whale watching, surfing, and sunset cocktails.",
    slug: "mirissa",
  },
];

const Destinations = () => {
  const [activeProvince, setActiveProvince] = useState<string | null>(null);

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
            <DestinationCard key={destination.slug} {...destination} />
          ))}
        </div>
      </Section>

      {/* All Destinations by Province */}
      <Section className="bg-muted">
        <SectionHeader
          subtitle="All Locations"
          title="Explore by Province"
          description="Browse our complete list of destinations across all provinces of Sri Lanka."
        />
        
        {/* Province Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            variant={activeProvince === null ? "default" : "outline"}
            onClick={() => setActiveProvince(null)}
            size="sm"
          >
            All Provinces
          </Button>
          {Object.keys(destinationsByProvince).map((province) => (
            <Button
              key={province}
              variant={activeProvince === province ? "default" : "outline"}
              onClick={() => setActiveProvince(province)}
              size="sm"
            >
              {destinationsByProvince[province as keyof typeof destinationsByProvince].icon} {province}
            </Button>
          ))}
        </div>

        {/* Province Sections */}
        <div className="space-y-12">
          {Object.entries(destinationsByProvince)
            .filter(([province]) => activeProvince === null || activeProvince === province)
            .map(([province, data]) => (
              <div key={province} className="bg-background rounded-2xl p-6 md:p-8 shadow-card">
                <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">{data.icon}</span>
                  {province}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {data.destinations.map((dest) => (
                    <a
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      className="px-4 py-3 bg-muted rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center"
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
