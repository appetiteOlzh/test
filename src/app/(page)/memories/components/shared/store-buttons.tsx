import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Кнопки скачивания из App Store и Google Play
export function StoreButtons({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button size="lg" variant={variant} className="gap-2" render={<a href="#" aria-label="Download on App Store" />}>
        <Apple className="size-5" />
        App Store
      </Button>
      <Button size="lg" variant={variant === "default" ? "outline" : variant} className="gap-2" render={<a href="#" aria-label="Download on Google Play" />}>
        <Play className="size-5" />
        Google Play
      </Button>
    </div>
  );
}
