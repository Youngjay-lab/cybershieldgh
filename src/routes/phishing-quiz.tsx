import { createFileRoute } from "@tanstack/react-router";
import { Check, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { quizQuestions } from "@/data/security-content";

export const Route = createFileRoute("/phishing-quiz")({
  head: () => ({
    meta: [
      { title: "Phishing Awareness Quiz — CyberShield" },
      {
        name: "description",
        content:
          "Five quick multiple-choice scenarios that test how well you can spot phishing and social engineering.",
      },
      { property: "og:title", content: "Phishing Awareness Quiz — CyberShield" },
      {
        property: "og:description",
        content: "Can you spot a phishing attempt? Take the five-question quiz.",
      },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = quizQuestions[index]!;
  const total = quizQuestions.length;

  const answer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const rating =
    score >= 5
      ? { label: "Excellent", tone: "text-success", note: "You spot attacks like a pro. Keep it up." }
      : score >= 3
        ? { label: "Good", tone: "text-accent", note: "Solid instincts — brush up on the misses below." }
        : {
            label: "Needs Improvement",
            tone: "text-warning",
            note: "Review our threat library and security tips, then try again.",
          };

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Check"
        title="Phishing Awareness Quiz"
        description="Five real-world scenarios. Answer honestly — the score is only for you."
      />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          {done ? (
            <div className="glass-card p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Your result
              </p>
              <p className="text-gradient mt-4 font-display text-6xl font-bold">
                {score}/{total}
              </p>
              <h2 className={`mt-4 text-2xl font-bold ${rating.tone}`}>{rating.label}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {rating.note}
              </p>
              <button
                type="button"
                onClick={restart}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                <RotateCcw className="h-4 w-4" /> Restart Quiz
              </button>
            </div>
          ) : (
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {index + 1} of {total}
                </span>
                <span>Score: {score}</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-[image:var(--gradient-cyber)] transition-all duration-500"
                  style={{ width: `${((index + (selected !== null ? 1 : 0)) / total) * 100}%` }}
                />
              </div>

              <h2 className="mt-7 text-xl font-semibold leading-snug">{question.question}</h2>

              <ul className="mt-6 space-y-3">
                {question.options.map((option, i) => {
                  const isCorrect = i === question.answer;
                  const isPicked = selected === i;
                  const state =
                    selected === null
                      ? "border-border hover:border-accent/60 hover:bg-secondary/40"
                      : isCorrect
                        ? "border-success/60 bg-success/10"
                        : isPicked
                          ? "border-destructive/60 bg-destructive/10"
                          : "border-border opacity-60";
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => answer(i)}
                        disabled={selected !== null}
                        className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm transition-colors ${state}`}
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current text-[10px] text-muted-foreground">
                          {selected !== null && isCorrect ? (
                            <Check className="h-3 w-3 text-success" />
                          ) : selected !== null && isPicked ? (
                            <X className="h-3 w-3 text-destructive" />
                          ) : (
                            String.fromCharCode(65 + i)
                          )}
                        </span>
                        <span>{option}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {selected !== null ? (
                <div className="animate-rise mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm leading-relaxed text-muted-foreground">
                  {question.explanation}
                </div>
              ) : null}

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  onClick={next}
                  disabled={selected === null}
                  className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform enabled:hover:scale-[1.03] disabled:opacity-40"
                >
                  {index + 1 === total ? "See result" : "Next question"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}