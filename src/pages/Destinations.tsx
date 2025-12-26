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

// Destination data organized by province with Wikipedia links
const destinationsByProvince = {
  "Western Province": {
    icon: "🌴",
    destinations: [
      { name: "Colombo", wikiUrl: "https://en.wikipedia.org/wiki/Colombo" },
      { name: "Fort", wikiUrl: "https://en.wikipedia.org/wiki/Fort_(Colombo)" },
      { name: "Pettah", wikiUrl: "https://en.wikipedia.org/wiki/Pettah_(Colombo)" },
      { name: "Galle Face", wikiUrl: "https://en.wikipedia.org/wiki/Galle_Face_Green" },
      { name: "Cinnamon Gardens", wikiUrl: "https://en.wikipedia.org/wiki/Cinnamon_Gardens" },
      { name: "Mount Lavinia", wikiUrl: "https://en.wikipedia.org/wiki/Mount_Lavinia" },
      { name: "Dehiwala", wikiUrl: "https://en.wikipedia.org/wiki/Dehiwala-Mount_Lavinia" },
      { name: "Wellawatte", wikiUrl: "https://en.wikipedia.org/wiki/Wellawatte" },
      { name: "Bambalapitiya", wikiUrl: "https://en.wikipedia.org/wiki/Bambalapitiya" },
      { name: "Negombo", wikiUrl: "https://en.wikipedia.org/wiki/Negombo" },
      { name: "Katunayake", wikiUrl: "https://en.wikipedia.org/wiki/Katunayake" },
      { name: "Wattala", wikiUrl: "https://en.wikipedia.org/wiki/Wattala" },
      { name: "Ja-Ela", wikiUrl: "https://en.wikipedia.org/wiki/Ja-Ela" },
      { name: "Kelaniya", wikiUrl: "https://en.wikipedia.org/wiki/Kelaniya" },
      { name: "Mirigama", wikiUrl: "https://en.wikipedia.org/wiki/Mirigama" },
      { name: "Minuwangoda", wikiUrl: "https://en.wikipedia.org/wiki/Minuwangoda" },
      { name: "Divulapitiya", wikiUrl: "https://en.wikipedia.org/wiki/Divulapitiya" },
      { name: "Kalutara", wikiUrl: "https://en.wikipedia.org/wiki/Kalutara" },
      { name: "Wadduwa", wikiUrl: "https://en.wikipedia.org/wiki/Wadduwa" },
      { name: "Panadura", wikiUrl: "https://en.wikipedia.org/wiki/Panadura" },
      { name: "Beruwala", wikiUrl: "https://en.wikipedia.org/wiki/Beruwala" },
      { name: "Bentota", wikiUrl: "https://en.wikipedia.org/wiki/Bentota" },
      { name: "Aluthgama", wikiUrl: "https://en.wikipedia.org/wiki/Aluthgama" },
    ],
  },
  "Southern Province": {
    icon: "🌊",
    destinations: [
      { name: "Galle", wikiUrl: "https://en.wikipedia.org/wiki/Galle" },
      { name: "Galle Fort", wikiUrl: "https://en.wikipedia.org/wiki/Galle_Fort" },
      { name: "Unawatuna", wikiUrl: "https://en.wikipedia.org/wiki/Unawatuna" },
      { name: "Thalpe", wikiUrl: "https://en.wikipedia.org/wiki/Thalpe" },
      { name: "Hikkaduwa", wikiUrl: "https://en.wikipedia.org/wiki/Hikkaduwa" },
      { name: "Ahangama", wikiUrl: "https://en.wikipedia.org/wiki/Ahangama" },
      { name: "Koggala", wikiUrl: "https://en.wikipedia.org/wiki/Koggala" },
      { name: "Weligama", wikiUrl: "https://en.wikipedia.org/wiki/Weligama" },
      { name: "Matara", wikiUrl: "https://en.wikipedia.org/wiki/Matara,_Sri_Lanka" },
      { name: "Mirissa", wikiUrl: "https://en.wikipedia.org/wiki/Mirissa" },
      { name: "Polhena", wikiUrl: "https://en.wikipedia.org/wiki/Polhena" },
      { name: "Dondra", wikiUrl: "https://en.wikipedia.org/wiki/Dondra" },
      { name: "Devinuwara", wikiUrl: "https://en.wikipedia.org/wiki/Dondra" },
      { name: "Dickwella", wikiUrl: "https://en.wikipedia.org/wiki/Dickwella" },
      { name: "Hambantota", wikiUrl: "https://en.wikipedia.org/wiki/Hambantota" },
      { name: "Tangalle", wikiUrl: "https://en.wikipedia.org/wiki/Tangalle" },
      { name: "Rekawa", wikiUrl: "https://en.wikipedia.org/wiki/Rekawa" },
      { name: "Tissamaharama", wikiUrl: "https://en.wikipedia.org/wiki/Tissamaharama" },
      { name: "Kataragama", wikiUrl: "https://en.wikipedia.org/wiki/Kataragama" },
      { name: "Bundala", wikiUrl: "https://en.wikipedia.org/wiki/Bundala_National_Park" },
    ],
  },
  "Central Province": {
    icon: "⛰️",
    destinations: [
      { name: "Kandy", wikiUrl: "https://en.wikipedia.org/wiki/Kandy" },
      { name: "Peradeniya", wikiUrl: "https://en.wikipedia.org/wiki/Peradeniya" },
      { name: "Digana", wikiUrl: "https://en.wikipedia.org/wiki/Digana" },
      { name: "Kundasale", wikiUrl: "https://en.wikipedia.org/wiki/Kundasale" },
      { name: "Katugastota", wikiUrl: "https://en.wikipedia.org/wiki/Katugastota" },
      { name: "Udunuwara", wikiUrl: "https://en.wikipedia.org/wiki/Udunuwara" },
      { name: "Matale", wikiUrl: "https://en.wikipedia.org/wiki/Matale" },
      { name: "Dambulla", wikiUrl: "https://en.wikipedia.org/wiki/Dambulla" },
      { name: "Sigiriya", wikiUrl: "https://en.wikipedia.org/wiki/Sigiriya" },
      { name: "Habarana", wikiUrl: "https://en.wikipedia.org/wiki/Habarana" },
      { name: "Riverston", wikiUrl: "https://en.wikipedia.org/wiki/Riverston" },
      { name: "Nalanda Gedige", wikiUrl: "https://en.wikipedia.org/wiki/Nalanda_Gedige" },
      { name: "Nuwara Eliya", wikiUrl: "https://en.wikipedia.org/wiki/Nuwara_Eliya" },
      { name: "Hatton", wikiUrl: "https://en.wikipedia.org/wiki/Hatton,_Sri_Lanka" },
      { name: "Talawakele", wikiUrl: "https://en.wikipedia.org/wiki/Talawakelle" },
      { name: "Lindula", wikiUrl: "https://en.wikipedia.org/wiki/Lindula" },
      { name: "Agrapatana", wikiUrl: "https://en.wikipedia.org/wiki/Agarapathana" },
      { name: "Horton Plains", wikiUrl: "https://en.wikipedia.org/wiki/Horton_Plains_National_Park" },
      { name: "Ohiya", wikiUrl: "https://en.wikipedia.org/wiki/Ohiya,_Sri_Lanka" },
    ],
  },
  "North Central Province": {
    icon: "🏞️",
    destinations: [
      { name: "Anuradhapura", wikiUrl: "https://en.wikipedia.org/wiki/Anuradhapura" },
      { name: "Mihintale", wikiUrl: "https://en.wikipedia.org/wiki/Mihintale" },
      { name: "Tambuttegama", wikiUrl: "https://en.wikipedia.org/wiki/Thambuttegama" },
      { name: "Medawachchiya", wikiUrl: "https://en.wikipedia.org/wiki/Medawachchiya" },
      { name: "Padaviya", wikiUrl: "https://en.wikipedia.org/wiki/Padaviya" },
      { name: "Polonnaruwa", wikiUrl: "https://en.wikipedia.org/wiki/Polonnaruwa" },
      { name: "Kaduruwela", wikiUrl: "https://en.wikipedia.org/wiki/Kaduruwela" },
      { name: "Hingurakgoda", wikiUrl: "https://en.wikipedia.org/wiki/Hingurakgoda" },
      { name: "Medirigiriya", wikiUrl: "https://en.wikipedia.org/wiki/Medirigiriya" },
      { name: "Somawathiya", wikiUrl: "https://en.wikipedia.org/wiki/Somawathiya_National_Park" },
    ],
  },
  "Eastern Province": {
    icon: "🐘",
    destinations: [
      { name: "Trincomalee", wikiUrl: "https://en.wikipedia.org/wiki/Trincomalee" },
      { name: "Nilaveli", wikiUrl: "https://en.wikipedia.org/wiki/Nilaveli" },
      { name: "Uppuveli", wikiUrl: "https://en.wikipedia.org/wiki/Uppuveli" },
      { name: "Kinniya", wikiUrl: "https://en.wikipedia.org/wiki/Kinniya" },
      { name: "Marble Beach", wikiUrl: "https://en.wikipedia.org/wiki/Marble_Beach" },
      { name: "Batticaloa", wikiUrl: "https://en.wikipedia.org/wiki/Batticaloa" },
      { name: "Kalkudah", wikiUrl: "https://en.wikipedia.org/wiki/Kalkudah" },
      { name: "Pasikudah", wikiUrl: "https://en.wikipedia.org/wiki/Pasikuda" },
      { name: "Valaichchenai", wikiUrl: "https://en.wikipedia.org/wiki/Valaichchenai" },
      { name: "Ampara", wikiUrl: "https://en.wikipedia.org/wiki/Ampara" },
      { name: "Arugam Bay", wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay" },
      { name: "Pottuvil", wikiUrl: "https://en.wikipedia.org/wiki/Pottuvil" },
      { name: "Lahugala", wikiUrl: "https://en.wikipedia.org/wiki/Lahugala_Kitulana_National_Park" },
      { name: "Deegavapi", wikiUrl: "https://en.wikipedia.org/wiki/Dighavapi" },
    ],
  },
  "Northern Province": {
    icon: "🌾",
    destinations: [
      { name: "Jaffna", wikiUrl: "https://en.wikipedia.org/wiki/Jaffna" },
      { name: "Nallur", wikiUrl: "https://en.wikipedia.org/wiki/Nallur" },
      { name: "Chavakachcheri", wikiUrl: "https://en.wikipedia.org/wiki/Chavakachcheri" },
      { name: "Point Pedro", wikiUrl: "https://en.wikipedia.org/wiki/Point_Pedro" },
      { name: "Keerimalai", wikiUrl: "https://en.wikipedia.org/wiki/Keerimalai" },
      { name: "Kilinochchi", wikiUrl: "https://en.wikipedia.org/wiki/Kilinochchi" },
      { name: "Iranamadu", wikiUrl: "https://en.wikipedia.org/wiki/Iranamadu" },
      { name: "Mannar", wikiUrl: "https://en.wikipedia.org/wiki/Mannar,_Sri_Lanka" },
      { name: "Adam's Bridge", wikiUrl: "https://en.wikipedia.org/wiki/Adam%27s_Bridge" },
      { name: "Thalaimannar", wikiUrl: "https://en.wikipedia.org/wiki/Talaimannar" },
      { name: "Mullaitivu", wikiUrl: "https://en.wikipedia.org/wiki/Mullaitivu" },
      { name: "Nayaru", wikiUrl: "https://en.wikipedia.org/wiki/Nayaru" },
      { name: "Vavuniya", wikiUrl: "https://en.wikipedia.org/wiki/Vavuniya" },
      { name: "Cheddikulam", wikiUrl: "https://en.wikipedia.org/wiki/Cheddikulam" },
    ],
  },
  "Uva Province": {
    icon: "🌄",
    destinations: [
      { name: "Badulla", wikiUrl: "https://en.wikipedia.org/wiki/Badulla" },
      { name: "Ella", wikiUrl: "https://en.wikipedia.org/wiki/Ella,_Sri_Lanka" },
      { name: "Bandarawela", wikiUrl: "https://en.wikipedia.org/wiki/Bandarawela" },
      { name: "Hali Ela", wikiUrl: "https://en.wikipedia.org/wiki/Hali-Ela" },
      { name: "Diyatalawa", wikiUrl: "https://en.wikipedia.org/wiki/Diyatalawa" },
      { name: "Passara", wikiUrl: "https://en.wikipedia.org/wiki/Passara" },
      { name: "Monaragala", wikiUrl: "https://en.wikipedia.org/wiki/Monaragala" },
      { name: "Wellawaya", wikiUrl: "https://en.wikipedia.org/wiki/Wellawaya" },
      { name: "Buttala", wikiUrl: "https://en.wikipedia.org/wiki/Buttala" },
      { name: "Bibile", wikiUrl: "https://en.wikipedia.org/wiki/Bibile" },
    ],
  },
  "Sabaragamuwa Province": {
    icon: "🌿",
    destinations: [
      { name: "Ratnapura", wikiUrl: "https://en.wikipedia.org/wiki/Ratnapura" },
      { name: "Balangoda", wikiUrl: "https://en.wikipedia.org/wiki/Balangoda" },
      { name: "Kalawana", wikiUrl: "https://en.wikipedia.org/wiki/Kalawana" },
      { name: "Sinharaja", wikiUrl: "https://en.wikipedia.org/wiki/Sinharaja_Forest_Reserve" },
      { name: "Udawalawa", wikiUrl: "https://en.wikipedia.org/wiki/Udawalawe_National_Park" },
      { name: "Kegalle", wikiUrl: "https://en.wikipedia.org/wiki/Kegalle" },
      { name: "Kitulgala", wikiUrl: "https://en.wikipedia.org/wiki/Kitulgala" },
      { name: "Mawanella", wikiUrl: "https://en.wikipedia.org/wiki/Mawanella" },
      { name: "Yatiyantota", wikiUrl: "https://en.wikipedia.org/wiki/Yatiyantota" },
      { name: "Pinnawala", wikiUrl: "https://en.wikipedia.org/wiki/Pinnawala_Elephant_Orphanage" },
    ],
  },
  "National Parks & Nature": {
    icon: "🐆",
    destinations: [
      { name: "Yala National Park", wikiUrl: "https://en.wikipedia.org/wiki/Yala_National_Park" },
      { name: "Wilpattu National Park", wikiUrl: "https://en.wikipedia.org/wiki/Wilpattu_National_Park" },
      { name: "Udawalawa National Park", wikiUrl: "https://en.wikipedia.org/wiki/Udawalawe_National_Park" },
      { name: "Minneriya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Minneriya_National_Park" },
      { name: "Kaudulla National Park", wikiUrl: "https://en.wikipedia.org/wiki/Kaudulla_National_Park" },
      { name: "Horton Plains", wikiUrl: "https://en.wikipedia.org/wiki/Horton_Plains_National_Park" },
      { name: "Sinharaja Rainforest", wikiUrl: "https://en.wikipedia.org/wiki/Sinharaja_Forest_Reserve" },
      { name: "Bundala National Park", wikiUrl: "https://en.wikipedia.org/wiki/Bundala_National_Park" },
      { name: "Gal Oya National Park", wikiUrl: "https://en.wikipedia.org/wiki/Gal_Oya_National_Park" },
      { name: "Wasgamuwa National Park", wikiUrl: "https://en.wikipedia.org/wiki/Wasgamuwa_National_Park" },
      { name: "Lunugamvehera National Park", wikiUrl: "https://en.wikipedia.org/wiki/Lunugamvehera_National_Park" },
    ],
  },
  "Popular Beaches": {
    icon: "🏖️",
    destinations: [
      { name: "Negombo Beach", wikiUrl: "https://en.wikipedia.org/wiki/Negombo" },
      { name: "Bentota Beach", wikiUrl: "https://en.wikipedia.org/wiki/Bentota" },
      { name: "Hikkaduwa Beach", wikiUrl: "https://en.wikipedia.org/wiki/Hikkaduwa" },
      { name: "Unawatuna Beach", wikiUrl: "https://en.wikipedia.org/wiki/Unawatuna" },
      { name: "Mirissa Beach", wikiUrl: "https://en.wikipedia.org/wiki/Mirissa" },
      { name: "Tangalle Beach", wikiUrl: "https://en.wikipedia.org/wiki/Tangalle" },
      { name: "Nilaveli Beach", wikiUrl: "https://en.wikipedia.org/wiki/Nilaveli" },
      { name: "Pasikudah Beach", wikiUrl: "https://en.wikipedia.org/wiki/Pasikuda" },
      { name: "Arugam Bay Beach", wikiUrl: "https://en.wikipedia.org/wiki/Arugam_Bay" },
      { name: "Kalpitiya", wikiUrl: "https://en.wikipedia.org/wiki/Kalpitiya" },
    ],
  },
};

// Featured destinations with images
const featuredDestinations = [
  {
    name: "Sigiriya",
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
    name: "Galle",
    image: galleImage,
    description: "A historic Dutch fort city on the southern coast with colonial architecture and ocean views.",
    wikiUrl: "https://en.wikipedia.org/wiki/Galle",
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
    name: "Mirissa",
    image: heroImage,
    description: "A tropical beach paradise perfect for whale watching, surfing, and sunset cocktails.",
    wikiUrl: "https://en.wikipedia.org/wiki/Mirissa",
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
            <DestinationCard key={destination.name} {...destination} />
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
                      key={dest.name}
                      href={dest.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
