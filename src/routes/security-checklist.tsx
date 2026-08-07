import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { checklistItems } from "@/data/security-content";

export const Route = createFileRoute("/security-checklist")({
  head: () => ({
    meta: [
      { title: "Security Checklist — CyberShield" },
      {
        name: "description",
        content:
          "Tick off eight essential security controls and track your cybersecurity posture with a live progress bar.",
      },
      { property: "og:title", content: "Security Checklist — CyberShield" },
      {
        property: "og:description",
        content: "How secure are you really? Work through the eight essentials.",
      },
    ],
  }),
  component: ChecklistPage,
});

function ChecklistPage() {
  const [checked, setChecked] = useState<boolean[]>(() => checklistItems.map(() => false));

  const completed = checked.filter(Boolean).length;
  const percent = Math.round((completed / checklistItems.length) * 100);

  const feedback =
    percent <= 40
      ? { label: "Your cybersecurity needs improvement.", tone: "text-destructive" }
      : percent <= 80
        ? { label: "You're making good progress.", tone: "text-warning" }
        : { label: "Excellent! You're following cybersecurity best practices.", tone: "text-success" };

  return (
    <>
      <PageHeader
        eyebrow="Self Assessment"
        title="Security Checklist"
        description="Tick everything you already do. Whatever stays unchecked is your next priority."
      />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold">Your security score</h2>
                <p className={`mt-1 text-sm ${feedback.tone}`}>{feedback.label}</p>
              </div>
              <span className="text-gradient shrink-0 font-display text-4xl font-bold">
                {percent}%
              </span>
            </div>
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-cyber)] transition-all duration-500"
                style={{ width: `${percent}%` }}
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Security checklist progress"
              />
            </div>

            <ul className="mt-8 space-y-3">
              {checklistItems.map((item, i) => {
                const isOn = checked[i];
                return (
                  <li key={item}>
                    <label
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm transition-colors ${
                        isOn
                          ? "border-success/50 bg-success/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/50 hover:bg-secondary/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isOn}
                        onChange={() =>
                          setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                        }
                        className="sr-only"
                      />
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border transition-colors ${
                          isOn ? "border-success bg-success text-primary-foreground" : "border-border"
                        }`}
                        aria-hidden="true"
                      >
                        {isOn ? <Check className="h-4 w-4" /> : null}
                      </span>
                      <span>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-xs text-muted-foreground">
              {completed} of {checklistItems.length} controls in place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}