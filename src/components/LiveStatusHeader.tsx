const LiveStatusHeader = () => {
  return (
    <div className="w-full bg-primary/10 border-b border-primary/30 py-2 px-4">
      <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase">
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-blink" />
        <span className="text-primary">LIVE</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-foreground">TICKET WINDOW OPEN — SEASON 2026</span>
      </div>
    </div>
  );
};

export default LiveStatusHeader;
