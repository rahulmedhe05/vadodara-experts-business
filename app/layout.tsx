import type { Metadata } from "next";
import Link from "next/link";
import { niches } from "@/lib/data";
import { VADODARA_AREAS } from "@/lib/areas";
import "./globals.css";

export const metadata: Metadata = {
  title: "VadodaraExperts — Premium Professional Services in Vadodara",
  description:
    "Best professional services in Vadodara. 956+ services, certified experts, same-day service. Free estimate!",
  metadataBase: new URL("https://vadodaraexperts.com"),
  openGraph: {
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};



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
              <svg width="42" height="42" viewBox="0 0 32 32" style={{display:"inline-block",verticalAlign:"middle",marginRight:"10px",flexShrink:0}} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hg-h" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5"/>
                    <stop offset="100%" stopColor="#7c3aed"/>
                  </linearGradient>
                </defs>
                <polygon points="16,1 29,8.5 29,23.5 16,31 3,23.5 3,8.5" fill="url(#hg-h)"/>
                <polygon points="16,3.5 27,9.75 27,22.25 16,28.5 5,22.25 5,9.75" fill="none" stroke="#06b6d4" strokeWidth="1"/>
                <text x="16" y="21" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="11" fill="#ffffff" letterSpacing="-0.5">VE</text>
              </svg>
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
                  <svg width="28" height="28" viewBox="0 0 32 32" style={{display:"inline-block",verticalAlign:"middle",marginRight:"8px",flexShrink:0}} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="hg-f" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5"/>
                        <stop offset="100%" stopColor="#7c3aed"/>
                      </linearGradient>
                    </defs>
                    <polygon points="16,1 29,8.5 29,23.5 16,31 3,23.5 3,8.5" fill="url(#hg-f)"/>
                    <polygon points="16,3.5 27,9.75 27,22.25 16,28.5 5,22.25 5,9.75" fill="none" stroke="#06b6d4" strokeWidth="1"/>
                    <text x="16" y="21" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="11" fill="#ffffff" letterSpacing="-0.5">VE</text>
                  </svg>
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

              {/* Service Categories — show top 6 per category to control crawl budget */}
              {Object.entries(grouped).map(([cat, items]) => (
                <div key={cat} className="footer-col">
                  <h4 className="footer-heading">{cat}</h4>
                  <ul className="footer-links">
                    {items.slice(0, 6).map((n) => (
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
                {VADODARA_AREAS.map((area) => (
                  <Link key={area.slug} href={`/${area.slug}/ac-services`} className="footer-area-tag">{area.name}</Link>
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
