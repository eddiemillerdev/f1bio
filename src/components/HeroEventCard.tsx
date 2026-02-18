import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import data from "@/data/data.json";

const getTimeLeft = (target: string) => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
};

const HeroEventCard = () => {
  const { featuredEvent } = data;
  const [time, setTime] = useState(getTimeLeft(featuredEvent.date));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(featuredEvent.date)), 1000);
    return () => clearInterval(id);
  }, [featuredEvent.date]);

  return (
    <div className="card-red-top rounded-sm bg-card p-6 md:p-8">
      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">Next Race</p>
      <h1 className="text-2xl md:text-3xl font-black uppercase f1-italic text-foreground leading-tight mb-1">
        {featuredEvent.title}
      </h1>
      <p className="text-sm text-muted-foreground mb-6">{featuredEvent.location}</p>

      {/* Countdown */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {(["days", "hours", "mins", "secs"] as const).map((unit) => (
          <div key={unit} className="bg-secondary rounded-sm p-3 text-center">
            <span className="block text-2xl md:text-3xl font-black text-foreground tabular-nums">
              {String(time[unit]).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{unit}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#"
        className="angular-cut red-glow flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest py-4 transition-all hover:brightness-110"
      >
        BUY TICKETS
        <ChevronRight size={18} strokeWidth={3} />
      </a>
    </div>
  );
};

export default HeroEventCard;
