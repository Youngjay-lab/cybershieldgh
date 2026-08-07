import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Eye,
  GraduationCap,
  KeyRound,
  ListChecks,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";
import heroImage from "@/assets/cyber-hero.jpg";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TipOfTheDay } from "@/components/site/TipOfTheDay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/security-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberShield — Stay Safe Online. Protect Your Digital Life." },
      {
        name: "description",
        content:
          "Free cybersecurity awareness hub: learn common threats, test your password strength, take the phishing quiz, and build a security checklist.",
      },
      { property: "og:title", content: "CyberShield — Stay Safe Online" },
      {
        property: "og:description",
        content: "Stay Aware. Stay Secure. Stay Safe. Cybersecurity awareness for everyone.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: ShieldAlert,
    title: "Learn About Cyber Threats",
    body: "Understand phishing, malware, ransomware, and the tactics behind them.",
    to: "/threats" as const,
  },
  {
    icon: KeyRound,
    title: "Password Strength Checker",
    body: "Test any password instantly and get concrete advice on making it stronger.",
    to: "/password-checker" as const,
  },
  {
    icon: Eye,
    title: "Phishing Awareness Quiz",
    body: "Five real-world scenarios that reveal how well you spot an attack.",
    to: "/phishing-quiz" as const,
  },
  {
    icon: ListChecks,
    title: "Improve Your Security",
    body: "Work through an interactive checklist and track your security posture.",
    to: "/security-checklist" as const,
  },
];

const stats = [
  { value: 90, suffix: "%+", label: "of cyberattacks begin with phishing" },
  { value: 24, suffix: "M+", label: "passwords stolen every year" },
  { value: 99, suffix: "%", label: "of attacks blocked by strong passwords and MFA" },
  { value: 100, suffix: "%", label: "cyber awareness is everyone's responsibility" },
];

const audiences = [
  { icon: GraduationCap, label: "Schools & universities" },
  { icon: Building2, label: "Businesses & startups" },
  { icon: Users, label: "Government & nonprofits" },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-background/85 to-background"
          aria-hidden="true"
        />
        <div className="cyber-grid animate-drift absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="section-shell relative py-24 text-center sm:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <ShieldCheck className="h-4 w-4" /> Stay Aware. Stay Secure. Stay Safe.
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              Stay Safe Online.{" "}
              <span className="text-gradient">Protect Your Digital Life.</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CyberShield turns cybersecurity best practice into something you can actually use
              today. Explore real threats, test your habits with interactive tools, and build the
              awareness that keeps people and organisations safe.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/threats"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/phishing-quiz"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-7 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                Take the Quiz
              </Link>
            </div>
          </Reveal>
          <Reveal delay={330}>
            <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {audiences.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" /> {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Where to start"
          title="Four ways to strengthen your security"
          description="Each tool is interactive, free, and takes only a few minutes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body, to }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Link to={to} className="glass-card group flex h-full flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Open
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-navy-deep/60">
        <div className="cyber-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="section-shell relative">
          <SectionHeading
            eyebrow="By the numbers"
            title="Why awareness matters"
            description="Most successful attacks exploit human habits, not advanced technology."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="glass-card h-full p-6 text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="about">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About CyberShield"
              title="Cybersecurity is a shared responsibility"
            />
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                <strong className="text-foreground">Cybersecurity</strong> is the practice of
                protecting devices, networks, accounts, and data from unauthorised access, theft,
                and disruption. It combines technology, clear processes, and — most importantly —
                informed people.
              </p>
              <p>
                <strong className="text-foreground">Why it matters:</strong> a single compromised
                password can expose banking details, medical records, private messages, or an
                entire organisation's systems. The cost is measured in money, reputation, and
                trust.
              </p>
              <p>
                <strong className="text-foreground">How awareness protects you:</strong> attackers
                rely on people rushing, trusting, and reusing. When individuals recognise a
                phishing message, use unique passwords, and enable multi-factor authentication,
                the most common attack paths simply stop working.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "Individuals", v: "Protect personal accounts, money, and identity." },
                { k: "Schools", v: "Teach safe digital habits from day one." },
                { k: "Businesses", v: "Reduce breach risk across every team." },
                { k: "Agencies", v: "Safeguard citizens' sensitive data." },
              ].map((item) => (
                <div key={item.k} className="glass-card p-5">
                  <h3 className="text-base font-semibold text-accent">{item.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-12">
            <TipOfTheDay />
          </div>
        </Reveal>
      </section>

      <section className="section-shell pt-0" id="faq">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="glass-card border-none px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
