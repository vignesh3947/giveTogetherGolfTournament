import Link from "next/link";

type NavKey = "home" | "about" | "contact";

type NavbarProps = {
  active?: NavKey;
};

const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "https://www.givetogether.ca/" },
  { key: "sponsors", label: "Become A Sponsor", href: "/sponsors" },
];

function NavIcon({ item }: { item: NavKey }) {
  if (item === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11L12 3.75L21 11V20.25C21 20.6642 20.6642 21 20.25 21H14V14.5H10V21H3.75C3.33579 21 3 20.6642 3 20.25V11Z" />
      </svg>
    );
  }

  if (item === "about") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" />
        <path d="M4 20.25C4 16.7974 7.35786 14 12 14C16.6421 14 20 16.7974 20 20.25V21H4V20.25Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7.5 9H14.5" />
      <path d="M7.5 13H12.5" />
      <path d="M16.8 13.2C17.8493 13.2 18.7 12.3493 18.7 11.3C18.7 10.2507 17.8493 9.4 16.8 9.4C15.7507 9.4 14.9 10.2507 14.9 11.3C14.9 12.3493 15.7507 13.2 16.8 13.2Z" />
      <path d="M13.95 17.3C14.2661 15.9776 15.404 15.1 16.8 15.1C18.196 15.1 19.3339 15.9776 19.65 17.3" />
    </svg>
  );
}

export default function Navbar({ active = "home" }: NavbarProps) {
  return (
    <header className="top-nav-shell">
      <nav className="top-nav">
        <Link href="/" className="top-nav-brand" aria-label="Go to home page">
          <span className="top-nav-brand-mark" aria-hidden="true">
            <span className="top-nav-brand-blade" />
            <span className="top-nav-brand-blade top-nav-brand-blade-bottom" />
          </span>
          <span className="top-nav-brand-text">
            <span>Give</span>
            <span>Together</span>
          </span>
        </Link>

        <div className="top-nav-links">
          {navItems.map((item) => {
            const isActive = item.key === active;
            const className = `top-nav-link ${isActive ? "is-active" : ""}`;
            const content = (
              <>
                <span className="top-nav-link-icon">
                  <NavIcon item={item.key} />
                </span>
                <span>{item.label}</span>
              </>
            );

            if (item.href.startsWith("http")) {
              return (
                <a key={item.key} href={item.href} className={className}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.key} href={item.href} className={className} aria-current={isActive ? "page" : undefined}>
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
