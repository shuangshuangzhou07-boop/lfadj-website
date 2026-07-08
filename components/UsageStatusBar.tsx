type PercentageMetric = {
  kind: "percentage";
  label: string;
  value: number;
  suffix?: string;
};

type CostMetric = {
  kind: "cost";
  label: string;
  value: string;
};

type UsageMetric = PercentageMetric | CostMetric;

const metrics: UsageMetric[] = [
  { kind: "percentage", label: "5h", value: 51 },
  { kind: "percentage", label: "7d", value: 59 },
  { kind: "percentage", label: "ctx", value: 52, suffix: " / 800k" },
  { kind: "cost", label: "api", value: "$72.25" },
];

function getPercentageColor(value: number) {
  if (value <= 50) {
    return "text-emerald-400";
  }

  if (value <= 75) {
    return "text-amber-300";
  }

  return "text-red-400";
}

export function UsageStatusBar() {
  return (
    <aside
      aria-label="AI usage status"
      className="fixed bottom-3 left-1/2 z-[99999] flex max-w-[calc(100vw-24px)] -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-md border border-emerald-500/25 bg-zinc-950/95 px-3 py-2 font-mono text-[11px] leading-none text-zinc-300 shadow-2xl shadow-black/35 backdrop-blur sm:bottom-4 sm:text-xs"
    >
      <span className="mr-1 flex items-center gap-1 text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        AI
      </span>

      {metrics.map((metric) => (
        <span
          key={metric.label}
          className="flex items-center gap-1 rounded border border-zinc-800 bg-black/45 px-2 py-1"
        >
          <span className="text-zinc-500">[{metric.label}]</span>
          {metric.kind === "percentage" ? (
            <span className={getPercentageColor(metric.value)}>
              {metric.value}%{metric.suffix}
            </span>
          ) : (
            <span className="text-cyan-300">{metric.value}</span>
          )}
        </span>
      ))}
    </aside>
  );
}
