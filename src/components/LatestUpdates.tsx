import data from "@/data/data.json";

const LatestUpdates = () => {
  return (
    <div>
      <h2 className="text-lg font-black uppercase f1-italic text-foreground mb-3">Latest Updates</h2>
      <div className="space-y-3">
        {data.updates.map((update, i) => (
          <div key={i} className="card-red-top rounded-sm bg-card p-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{update.date}</p>
            <h3 className="text-sm font-black uppercase f1-italic text-foreground mb-1">{update.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{update.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
