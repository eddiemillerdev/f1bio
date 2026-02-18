import data from "@/data/data.json";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Available: "bg-green-600/20 text-green-400 border-green-600/40",
  Limited: "bg-amber-600/20 text-amber-400 border-amber-600/40",
  "Sold Out": "bg-red-600/20 text-red-400 border-red-600/40",
};

const AvailabilityList = () => {
  return (
    <div className="card-red-top rounded-sm bg-card">
      <div className="p-4 md:p-6 pb-2">
        <h2 className="text-lg font-black uppercase f1-italic text-foreground">2026 Calendar</h2>
      </div>
      <div className="divide-y divide-border">
        {data.ticketLinks.map((race, i) => (
          <a
            key={i}
            href={race.buyUrl}
            className="flex items-center gap-3 px-4 md:px-6 py-3 hover:bg-secondary/50 transition-colors group"
          >
            <span className="text-xl w-8 text-center">{race.flag}</span>
            <span className="flex-1 text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {race.raceName}
            </span>
            <Badge
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider rounded-sm px-2 py-0.5 border",
                statusStyles[race.availability]
              )}
            >
              {race.availability}
            </Badge>
            <span className="text-xs font-bold text-muted-foreground w-14 text-right">{race.priceFrom}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityList;
