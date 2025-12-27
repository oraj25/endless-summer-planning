import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TourCardProps {
  name: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  className?: string;
  onViewDetails: () => void;
}

export const TourCard = ({
  name,
  image,
  description,
  duration,
  price,
  className,
  onViewDetails,
}: TourCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          From ${price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>

        {/* CTA */}
        <Button variant="outline" className="w-full group/btn" onClick={onViewDetails}>
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};