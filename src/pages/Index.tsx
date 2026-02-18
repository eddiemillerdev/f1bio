import { motion } from "framer-motion";
import LiveStatusHeader from "@/components/LiveStatusHeader";
import HeroEventCard from "@/components/HeroEventCard";
import AvailabilityList from "@/components/AvailabilityList";
import SocialLinks from "@/components/SocialLinks";
import LatestUpdates from "@/components/LatestUpdates";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Section = ({ children, index }: { children: React.ReactNode; index: number }) => (
  <motion.div custom={index} initial="hidden" animate="visible" variants={sectionVariants}>
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiveStatusHeader />
      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <Section index={0}>
          <HeroEventCard />
        </Section>
        <Section index={1}>
          <AvailabilityList />
        </Section>
        <Section index={2}>
          <SocialLinks />
        </Section>
        <Section index={3}>
          <LatestUpdates />
        </Section>
        <motion.footer
          custom={4}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="text-center py-6"
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 — F1 Ticket Hub. Not affiliated with Formula 1.
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
