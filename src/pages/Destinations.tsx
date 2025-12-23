import { Section, SectionHeader } from "@/components/ui/section";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { Layout } from "@/components/layout/Layout";

import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import heroImage from "@/assets/hero-beach.jpg";

const destinations = [
  {
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "The iconic Lion Rock fortress, a UNESCO World Heritage site rising 200 meters above the jungle. Marvel at ancient frescoes and royal gardens.",
    slug: "sigiriya",
  },
  {
    name: "Ella",
    image: ellaImage,
    description: "A scenic hill country paradise famous for the Nine Arch Bridge, tea plantations, and breathtaking hiking trails through misty mountains.",
    slug: "ella",
  },
  {
    name: "Galle",
    image: galleImage,
    description: "A historic Dutch fort city on the southern coast, featuring colonial architecture, boutique shops, and stunning ocean views.",
    slug: "galle",
  },
  {
    name: "Kandy",
    image: kandyImage,
    description: "The sacred hill capital home to the Temple of the Tooth, traditional dance performances, and the beautiful Kandy Lake.",
    slug: "kandy",
  },
  {
    name: "Yala National Park",
    image: yalaImage,
    description: "Sri Lanka's premier wildlife sanctuary, famous for having the highest density of leopards in the world, plus elephants and exotic birds.",
    slug: "yala",
  },
  {
    name: "Mirissa",
    image: heroImage,
    description: "A tropical beach paradise perfect for whale watching, surfing, and sunset cocktails on palm-fringed shores.",
    slug: "mirissa",
  },
];

const Destinations = () => {
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

      {/* Destinations Grid */}
      <Section>
        <SectionHeader
          subtitle="Where to Go"
          title="Choose Your Adventure"
          description="Each destination offers a unique glimpse into Sri Lanka's incredible diversity. Click on any location to learn more and plan your visit."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} {...destination} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Destinations;
