import { createFileRoute } from "@tanstack/react-router";
import { Bug, Database, Fish, KeyRound, Lock, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { threats } from "@/data/security-content";

export const Route = createFileRoute("/threats")({
  head: () => ({
    meta: [
      { title: "Common Cyber Threats — CyberShield" },
      {
        name: "description",
        content:
          "Phishing, malware, ransomware, password attacks, social engineering, and data breaches explained with prevention tips.",
      },
      { property: "og:title", content: "Common Cyber Threats — CyberShield" },
      {
        property: "og:description",
        content: "Understand the six most common cyber threats and how to prevent them.",
      },
    ],
  }),
  component: ThreatsPage,
});

const icons: Record<string, LucideIcon> = { Fish, Bug, Lock, KeyRound, Users, Database };

function ThreatsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Threat Library"
        title="Common Cyber Threats"
        description="The attacks you are most likely to meet — what they look like, and the habits that stop them."
      />
      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, i) => {
            const Icon = icons[threat.icon] ?? ShieldCheck;
            return (
              <Reveal key={threat.title} delay={i * 70}>
                <article className="glass-card flex h-full flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold">{threat.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {threat.description}
                  </p>
                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Prevention tips
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {threat.tips.map((tip) => (
                      <li key={tip} className="flex gap-2.5">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}