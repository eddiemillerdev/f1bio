import { ChevronRight, Instagram, Twitter, Youtube, Music, Facebook } from "lucide-react";
import data from "@/data/data.json";

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Twitter,
  Youtube,
  Music,
  Facebook,
};

const SocialLinks = () => {
  return (
    <div className="space-y-2">
      {data.socialLinks.map((link, i) => {
        const Icon = iconMap[link.icon] || ChevronRight;
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="angular-cut-sm red-glow flex items-center gap-3 w-full bg-secondary hover:bg-secondary/80 text-foreground font-bold text-sm uppercase tracking-wider px-5 py-4 transition-all"
          >
            <Icon size={18} />
            <span className="flex-1">{link.platform}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
