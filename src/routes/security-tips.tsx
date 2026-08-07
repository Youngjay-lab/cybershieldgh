import { createFileRoute } from "@tanstack/react-router";
import {
  Bug,
  HardDriveDownload,
  KeyRound,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { TipOfTheDay } from "@/components/site/TipOfTheDay";
import { securityTips } from "@/data/security-content";

export const Route = createFileRoute("/security-tips")({
  head: () => ({
    meta: [
      { title: "Security Tips — CyberShield" },
      {
        name: "description",
        content:
          "Eight practical cybersecurity habits: strong passwords, 2FA, updates, backups, antivirus, secure Wi-Fi, and device locks.",
      },
      { property: "og:title", content: "Security Tips — CyberShield" },
      {
        property: "og:description",
        content: "Practical everyday habits that dramatically reduce your cyber risk.",
      },
    ],
  }),
  component: SecurityTipsPage,
});

const icons: Record<string, LucideIcon> = {
  KeyRound,
  ShieldCheck,
  RefreshCw,
  MousePointerClick,
  HardDriveDownload,
  Bug,
  Wifi,
  Smartphone,
};

function SecurityTipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Best Practice"
        title="Security Tips"
        description="Small, repeatable habits protect you far more than any single piece of software."
      />
      <section className="section-shell">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityTips.map((tip, i) => {
            const Icon = icons[tip.icon] ?? ShieldCheck;
            return (
              <Reveal key={tip.title} delay={i * 60}>
                <article className="glass-card flex h-full flex-col p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-base font-semibold">{tip.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12">
          <TipOfTheDay />
        </div>
      </section>
    </>
  );
}