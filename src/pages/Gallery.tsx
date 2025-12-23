import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

import heroImage from "@/assets/hero-beach.jpg";
import sigiriyaImage from "@/assets/sigiriya.jpg";
import ellaImage from "@/assets/ella.jpg";
import galleImage from "@/assets/galle.jpg";
import kandyImage from "@/assets/kandy.jpg";
import yalaImage from "@/assets/yala-safari.jpg";
import surfingImage from "@/assets/surfing.jpg";
import whaleImage from "@/assets/whale-watching.jpg";

const categories = [
  { name: "All", slug: "all" },
  { name: "Beaches", slug: "beaches" },
  { name: "Wildlife", slug: "wildlife" },
  { name: "Culture", slug: "culture" },
  { name: "Adventure", slug: "adventure" },
];

const galleryImages = [
  { src: heroImage, alt: "Tropical beach sunset", category: "beaches" },
  { src: sigiriyaImage, alt: "Sigiriya Rock Fortress", category: "culture" },
  { src: ellaImage, alt: "Nine Arch Bridge Ella", category: "culture" },
  { src: galleImage, alt: "Galle Fort Lighthouse", category: "culture" },
  { src: kandyImage, alt: "Kandy Temple", category: "culture" },
  { src: yalaImage, alt: "Elephants in Yala", category: "wildlife" },
  { src: surfingImage, alt: "Surfing at sunset", category: "adventure" },
  { src: whaleImage, alt: "Whale watching", category: "wildlife" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sri Lanka gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Visual inspiration for your Sri Lankan adventure
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="sticky top-16 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <Section className="!pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-glow"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
