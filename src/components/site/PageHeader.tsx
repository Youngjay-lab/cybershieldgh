export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="cyber-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="animate-glow absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="section-shell relative text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}