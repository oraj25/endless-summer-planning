import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  slug: string;
  className?: string;
}

export const DestinationCard = ({
  name,
  image,
  description,
  slug,
  className,
}: DestinationCardProps) => {
  return (
    <Link
      to={`/destinations/${slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-card hover:shadow-glow transition-all duration-500",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
        <h3 className="font-display text-2xl font-bold mb-2">{name}</h3>
        <p className="text-primary-foreground/80 text-sm line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
