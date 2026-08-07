import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { navItems } from "./nav-items";

const socials = [
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "GitHub", Icon: Github },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo withTagline />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cybersecurity awareness training and tools for schools, businesses, government
            agencies, and everyday people.
          </p>
          <div className="mt-5 flex gap-3">
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

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
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
              Cyber Awareness Center, 200 Secure Way
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CyberShield. All rights reserved.</p>
          <p>
            This website is intended for cybersecurity awareness and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}