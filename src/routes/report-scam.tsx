import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Upload } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/report-scam")({
  head: () => ({
    meta: [
      { title: "Report a Scam — CyberShield" },
      {
        name: "description",
        content:
          "Demonstration scam reporting form: describe a phishing message, fraud attempt, or suspicious website.",
      },
      { property: "og:title", content: "Report a Scam — CyberShield" },
      { property: "og:description", content: "Demo reporting form for scams and phishing." },
    ],
  }),
  component: ReportScamPage,
});

const schema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  type: z.string().min(1, { message: "Select a scam type" }),
  description: z
    .string()
    .trim()
    .min(20, { message: "Please describe the scam in at least 20 characters" })
    .max(2000),
});

const scamTypes = [
  "Phishing email",
  "SMS / smishing",
  "Phone call scam",
  "Fake website",
  "Investment or crypto fraud",
  "Other",
];

function ReportScamPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

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
        eyebrow="Demonstration"
        title="Report a Scam"
        description="Share the details of a suspicious message or website. This is a demo form — no data is transmitted."
      />
      <section className="section-shell">
        <div className="mx-auto max-w-2xl">
          {sent ? (
            <div className="glass-card animate-rise p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h2 className="mt-5 text-xl font-semibold">Report received</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Thank you for your report. This is a demonstration website. In a real cybersecurity
                platform, your report would be forwarded to the appropriate cybersecurity
                authorities.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setFileName("");
                }}
                className="mt-7 rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="glass-card p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-muted-foreground">(optional)</span>
                </label>
                <input id="name" name="name" maxLength={100} className={field} />
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={field} />
                {errors['email'] ? (
                  <p className="mt-2 text-xs text-destructive">{errors['email']}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="type" className="text-sm font-medium">
                  Scam type
                </label>
                <select id="type" name="type" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a type…
                  </option>
                  {scamTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors['type'] ? <p className="mt-2 text-xs text-destructive">{errors['type']}</p> : null}
              </div>

              <div className="mt-5">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  maxLength={2000}
                  className="mt-2 w-full rounded-2xl border border-input bg-background/60 p-4 text-sm outline-none transition-colors focus:border-accent/70"
                />
                {errors['description'] ? (
                  <p className="mt-2 text-xs text-destructive">{errors['description']}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <span className="text-sm font-medium">Screenshot (optional)</span>
                <label
                  htmlFor="screenshot"
                  className="mt-2 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-border px-4 py-5 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <Upload className="h-5 w-5 shrink-0" />
                  <span className="truncate">{fileName || "Choose an image file"}</span>
                </label>
                <input
                  id="screenshot"
                  name="screenshot"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Submit report
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}