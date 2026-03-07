import type { Metadata } from "next";
import Link from "next/link";
import { niches } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "VadodaraExperts — Premium Professional Services in Vadodara",
  description:
    "VadodaraExperts delivers professional services across 200+ categories in Vadodara. Quality work, expert teams, guaranteed satisfaction.",
  metadataBase: new URL("https://vadodaraexperts.com"),
  openGraph: {
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

const FOOTER_AREAS = [
  "Alkapuri", "Akota", "Ajwa Road", "Atladara", "Bill", "Chhani",
  "Dabhoi Road", "Fatehgunj", "GIDC Makarpura", "Gorwa", "Gotri",
  "Halol Road", "Harni", "Karelibaug", "Manjalpur", "Makarpura",
  "Nandesari", "Nizampura", "Old Padra Road", "Padra Road", "Race Course",
  "Raopura", "Sama", "Savli Road", "Sayajigunj", "Subhanpura",
  "Tandalja", "Tarsali", "Vasna", "Waghodia Road",
];

function groupByCategory(list: typeof niches) {
  const map: Record<string, typeof niches> = {};
  for (const n of list) {
    if (!map[n.category]) map[n.category] = [];
    map[n.category].push(n);
  }
  return map;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const grouped = groupByCategory(niches);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* ===== HEADER ===== */}
        <header className="header">
          <nav className="header-nav">
            <Link href="/" className="logo">
              Vadodara<span className="logo-accent">Experts</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Link href="/contact" className="header-cta">
              Get a Quote
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-container">
              {/* Brand Column */}
              <div className="footer-brand">
                <Link href="/" className="footer-logo">
                  Vadodara<span className="logo-accent">Experts</span>
                </Link>
                <p className="footer-brand-desc">
                  Vadodara&apos;s leading professional services company. We deliver expert solutions across 200+ service categories with quality, reliability, and trust.
                </p>
                <div className="footer-contact-info">
                  <p>Vadodara, Gujarat, India</p>
                  <p>info@vadodaraexperts.com</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-col">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Service Categories */}
              {Object.entries(grouped).map(([cat, items]) => (
                <div key={cat} className="footer-col">
                  <h4 className="footer-heading">{cat}</h4>
                  <ul className="footer-links footer-services-list">
                    {items.map((n) => (
                      <li key={n.slug}>
                        <Link href={`/${n.slug}`}>{n.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="footer-areas">
            <div className="footer-areas-container">
              <h4 className="footer-heading">Areas We Serve in Vadodara</h4>
              <div className="footer-area-tags">
                {FOOTER_AREAS.map((area) => (
                  <span key={area} className="footer-area-tag">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} VadodaraExperts.com. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
