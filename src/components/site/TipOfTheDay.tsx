import { useEffect, useState } from "react";
import { Lightbulb, RefreshCw } from "lucide-react";
import { dailyTips } from "@/data/security-content";

export function TipOfTheDay() {
  const [tip, setTip] = useState<string>(dailyTips[0]);

  const shuffle = () => setTip(dailyTips[Math.floor(Math.random() * dailyTips.length)]!);

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <div className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent">
          <Lightbulb className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Security Tip of the Day
          </p>
          <p className="mt-1 text-base font-medium">{tip}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={shuffle}
        className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent sm:self-auto"
      >
        <RefreshCw className="h-4 w-4" /> New tip
      </button>
    </div>
  );
}