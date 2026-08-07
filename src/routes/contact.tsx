import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CyberShield" },
      {
        name: "description",
        content:
          "Get in touch with the CyberShield awareness team about training, workshops, or partnerships.",
      },
      { property: "og:title", content: "Contact — CyberShield" },
      {
        property: "og:description",
        content: "Questions about cybersecurity awareness training? Send us a message.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  subject: z.string().trim().min(3, { message: "Please add a subject" }).max(150),
  message: z
    .string()
    .trim()
    .min(20, { message: "Your message should be at least 20 characters" })
    .max(2000),
});

const socials = [
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "GitHub", Icon: Github },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const field =
    "mt-2 h-12 w-full rounded-2xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors focus:border-accent/70";

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact CyberShield"
        description="Awareness training, workshops, or a question about the tools — we'd love to hear from you."
      />
      <section className="section-shell">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_1fr]">
          {sent ? (
            <div className="glass-card animate-rise p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h2 className="mt-5 text-xl font-semibold">Message sent</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. This is a demonstration website, so no message was
                actually delivered.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-7 rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="glass-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="name" name="name" maxLength={100} className={field} />
                  {errors['name'] ? (
                    <p className="mt-2 text-xs text-destructive">{errors['name']}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input id="email" name="email" type="email" maxLength={255} className={field} />
                  {errors['email'] ? (
                    <p className="mt-2 text-xs text-destructive">{errors['email']}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input id="subject" name="subject" maxLength={150} className={field} />
                {errors['subject'] ? (
                  <p className="mt-2 text-xs text-destructive">{errors['subject']}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={2000}
                  className="mt-2 w-full rounded-2xl border border-input bg-background/60 p-4 text-sm outline-none transition-colors focus:border-accent/70"
                />
                {errors['message'] ? (
                  <p className="mt-2 text-xs text-destructive">{errors['message']}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>
          )}

          <aside className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold">Contact details</h2>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  hello@cybershield.demo
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  +1 (555) 018-4477
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Cyber Awareness Center, 200 Secure Way, Suite 14
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                {socials.map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card cyber-grid grid h-56 place-items-center p-6 text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 text-sm text-muted-foreground">
                  Map placeholder — our awareness center location
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}