import { Link } from "@tanstack/react-router";
import logo from "@/assets/cybershield-logo.png";

export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="CyberShield home">
      <img
        src={logo}
        alt="CyberShield logo"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 drop-shadow-[0_0_12px_oklch(0.72_0.16_220/45%)]"
      />
      <span className="min-w-0">
        <span className="block truncate font-display text-lg font-bold tracking-tight">
          Cyber<span className="text-gradient">Shield</span>
        </span>
        {withTagline ? (
          <span className="block text-xs text-muted-foreground">
            Stay Aware. Stay Secure. Stay Safe.
          </span>
        ) : null}
      </span>
    </Link>
  );
}