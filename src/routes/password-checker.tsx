import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/password-checker")({
  head: () => ({
    meta: [
      { title: "Password Strength Checker — CyberShield" },
      {
        name: "description",
        content:
          "Test password strength instantly in your browser and get specific suggestions for a stronger passphrase.",
      },
      { property: "og:title", content: "Password Strength Checker — CyberShield" },
      {
        property: "og:description",
        content: "Check length, case, numbers, and symbols — nothing ever leaves your device.",
      },
    ],
  }),
  component: PasswordCheckerPage,
});

const rules = [
  { key: "length", label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { key: "upper", label: "Contains uppercase letters", test: (v: string) => /[A-Z]/.test(v) },
  { key: "lower", label: "Contains lowercase letters", test: (v: string) => /[a-z]/.test(v) },
  { key: "number", label: "Contains numbers", test: (v: string) => /\d/.test(v) },
  {
    key: "special",
    label: "Contains special characters",
    test: (v: string) => /[^A-Za-z0-9]/.test(v),
  },
];

function PasswordCheckerPage() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const results = useMemo(() => rules.map((r) => ({ ...r, passed: r.test(value) })), [value]);
  const score = results.filter((r) => r.passed).length;

  const verdict =
    value.length === 0
      ? { label: "Enter a password", tone: "text-muted-foreground", bar: "bg-muted" }
      : score <= 2
        ? { label: "Weak", tone: "text-destructive", bar: "bg-destructive" }
        : score <= 4
          ? { label: "Medium", tone: "text-warning", bar: "bg-warning" }
          : { label: "Strong", tone: "text-success", bar: "bg-success" };

  const suggestions = results.filter((r) => !r.passed).map((r) => r.label);

  return (
    <>
      <PageHeader
        eyebrow="Interactive Tool"
        title="Password Strength Checker"
        description="Everything is evaluated locally in your browser — your password is never sent anywhere."
      />
      <section className="section-shell">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 sm:p-8">
            <label htmlFor="password" className="text-sm font-semibold">
              Test a password
            </label>
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-input bg-background/60 px-4 focus-within:border-accent/70">
              <input
                id="password"
                type={visible ? "text" : "password"}
                value={value}
                onChange={(e) => setValue(e.target.value.slice(0, 128))}
                autoComplete="off"
                placeholder="Type a password…"
                className="h-12 w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                aria-label={visible ? "Hide password" : "Show password"}
                className="shrink-0 text-muted-foreground transition-colors hover:text-accent"
              >
                {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Strength</span>
              <span className={`font-semibold ${verdict.tone}`}>{verdict.label}</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className={`h-full rounded-full transition-all duration-500 ${verdict.bar}`}
                style={{ width: `${(score / rules.length) * 100}%` }}
              />
            </div>

            <ul className="mt-6 space-y-2.5">
              {results.map((r) => (
                <li key={r.key} className="flex items-center gap-3 text-sm">
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                      r.passed ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {r.passed ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                  </span>
                  <span className={r.passed ? "text-foreground" : "text-muted-foreground"}>
                    {r.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold">How to improve it</h2>
            {value.length === 0 ? (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Start typing to see personalised suggestions.
              </p>
            ) : suggestions.length === 0 ? (
              <p className="mt-3 text-sm leading-relaxed text-success">
                Excellent — this password meets every check. Store it in a password manager and
                never reuse it on another account.
              </p>
            ) : (
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {suggestions.map((s) => (
                  <li key={s} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Good habits
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Prefer a long passphrase of four or more unrelated words.</li>
              <li>Never reuse a password across two services.</li>
              <li>Use a password manager to generate and store credentials.</li>
              <li>Add two-factor authentication on every important account.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}