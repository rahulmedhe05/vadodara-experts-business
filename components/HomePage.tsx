"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { niches } from "@/lib/data";

const SERVICE_CATEGORIES = [
  {
    icon: "🏠",
    title: "Home Services",
    desc: "AC repair, plumbing, electrical, cleaning & more",
    slug: "home-services",
  },
  {
    icon: "🏗️",
    title: "Construction",
    desc: "Contractors, architecture, interior design & more",
    slug: "construction",
  },
  {
    icon: "🏭",
    title: "Industrial",
    desc: "Fabrication, automation, machinery & more",
    slug: "industrial",
  },
  {
    icon: "💼",
    title: "Professional",
    desc: "Legal, finance, consultancy & more",
    slug: "professional",
  },
];

const STATS = [
  { value: "200+", label: "Service Categories" },
  { value: "20,000+", label: "Keyword Pages" },
  { value: "50+", label: "Areas Covered" },
  { value: "24/7", label: "Service Available" },
];

const VADODARA_AREAS = [
  "Alkapuri", "Akota", "Ajwa Road", "Atladara", "Bapod", "Bajwa",
  "Bill", "Chhani", "Dabhoi Road", "Diwalipura", "Ellora Park",
  "Fatehgunj", "GIDC Makarpura", "Gorwa", "Gotri", "Halol Road",
  "Harni", "Jetalpur", "Karelibaug", "Kirti Stambh", "Laxmipura",
  "Manjalpur", "Makarpura", "Nandesari", "Nava Yard", "Nizampura",
  "Old Padra Road", "OP Road", "Padra Road", "Panigate", "Race Course",
  "Raopura", "Sama", "Savli Road", "Sayajigunj", "Subhanpura",
  "Tandalja", "Tarsali", "Vasna", "Waghodia Road", "Wadi",
  "Productivity Road", "Undera", "Sevasi", "Bhayli", "Vadsar",
  "EME", "Kalali", "Sindhrot", "Vemali",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Search Your Service",
    desc: "Type what you need — from AC repair to industrial automation. Our smart search finds the right category instantly.",
  },
  {
    num: "02",
    title: "Explore the Service",
    desc: "Browse detailed service pages with complete information, FAQs, and everything you need to make an informed decision.",
  },
  {
    num: "03",
    title: "Get in Touch",
    desc: "Contact our team directly. We handle your requirement end-to-end with professional, reliable service delivery.",
  },
];

const GROUPED_NICHES = (() => {
  const groups: Record<string, typeof niches> = {};
  for (const n of niches) {
    if (!groups[n.category]) groups[n.category] = [];
    groups[n.category].push(n);
  }
  return groups;
})();

export default function HomePage() {
  const router = useRouter();

  function handleServiceSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const slug = e.target.value;
    if (slug) router.push(`/${slug}`);
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-bg-image" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <span className="hero-badge">Vadodara&apos;s #1 Service Platform</span>
          <h1 className="hero-title">
            Expert Services,<br />
            <span className="hero-title-accent">Delivered with Excellence</span>
          </h1>
          <p className="hero-subtitle">
            Professional services across 200+ categories in Vadodara.
            Quality work, trusted teams, guaranteed satisfaction.
          </p>

          {/* Service Selector */}
          <div className="hero-search-wrapper">
            <div className="hero-search">
              <div className="search-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <select
                onChange={handleServiceSelect}
                defaultValue=""
                className="search-input search-select"
              >
                <option value="" disabled>Select a service you need...</option>
                {Object.entries(GROUPED_NICHES).map(([category, items]) => (
                  <optgroup key={category} label={category}>
                    {items.map((n) => (
                      <option key={n.slug} value={n.slug}>{n.name}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <div className="search-city">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Vadodara
              </div>
            </div>
          </div>

          <div className="hero-popular">
            <span className="hero-popular-label">Popular:</span>
            {["AC Services", "Plumbing Services", "Interior Design Services", "Civil Contractors"].map((name) => {
              const niche = niches.find((n) => n.name === name);
              return niche ? (
                <Link key={niche.slug} href={`/${niche.slug}`} className="hero-popular-tag">
                  {niche.name}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-bar">
        <div className="stats-container">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICE CATEGORIES ===== */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Comprehensive Service Solutions</h2>
            <p className="section-subtitle">
              From home repairs to large-scale industrial projects — we deliver professional services across every domain.
            </p>
          </div>
          <div className="categories-grid">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.slug} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.desc}</p>
                <span className="category-count">
                  {niches.filter((n) =>
                    cat.slug === "home-services" ? n.category === "Home Services" :
                    cat.slug === "construction" ? n.category === "Construction & Infrastructure" :
                    cat.slug === "industrial" ? n.category === "Industrial Services" :
                    n.category === "Professional Services"
                  ).length}+ Services
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Simple. Fast. Reliable.</h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="process-card">
                <span className="process-num">{step.num}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why VadodaraExperts</span>
            <h2 className="section-title">Built on Trust, Driven by Quality</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Verified Professionals</h3>
              <p>Every service team is background-verified and skill-assessed before being onboarded.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
              </div>
              <h3>Premium Quality Work</h3>
              <p>We maintain the highest standards of service delivery. No shortcuts, no compromises.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>On-Time Delivery</h3>
              <p>We respect your time. Projects are completed within the committed timeframes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Expert Teams</h3>
              <p>Specialized professionals for every service category — from home repairs to industrial projects.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><path d="M1 10h22"/></svg>
              </div>
              <h3>Transparent Pricing</h3>
              <p>No hidden charges. Get clear estimates upfront so you can plan with confidence.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
              </div>
              <h3>Satisfaction Guaranteed</h3>
              <p>Your satisfaction is our priority. We stand behind every service we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Tell us what you need and our team will handle the rest. Professional service, every time.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary-lg">
              Contact Us
            </Link>
            <Link href="/about" className="btn-outline-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR PHILOSOPHY ===== */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Philosophy</span>
            <h2 className="section-title">Think Different. Build Better.</h2>
            <p className="section-subtitle">We don&apos;t just deliver services — we craft experiences that redefine what professional work means in Vadodara.</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-main">
              <p className="philosophy-lead">
                Every great city deserves a service partner that refuses to settle for ordinary. VadodaraExperts was born from a simple belief: the people of Vadodara deserve the same standard of professional excellence that exists in the world&apos;s greatest cities. Not tomorrow. Not someday. Right now.
              </p>
              <p className="philosophy-text">
                We looked at how services were being delivered across Vadodara — the broken promises, the inconsistent quality, the frustrating lack of accountability — and we decided that none of it was acceptable. The gap between what people expected and what they received was enormous. So we set out to close it. Completely.
              </p>
              <p className="philosophy-text">
                At VadodaraExperts, we obsess over every detail. The professional who shows up at your door has been screened, trained, and held to standards that most companies wouldn&apos;t even attempt. Because we believe that quality isn&apos;t a feature you add — it&apos;s the foundation everything else stands on. When you strip away the marketing and the noise, all that matters is this: did the work exceed your expectations? If the answer isn&apos;t yes, we haven&apos;t done our job.
              </p>
            </div>
            <div className="philosophy-side">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Professional excellence at VadodaraExperts"
                width={520}
                height={360}
                className="philosophy-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE VADODARA STANDARD ===== */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">The Standard</span>
            <h2 className="section-title">200+ Services. One Uncompromising Standard.</h2>
          </div>
          <div className="standard-content">
            <div className="standard-block">
              <h3 className="standard-heading">Home Services That Feel Like Hospitality</h3>
              <p className="standard-text">
                Your home is your sanctuary. When something breaks, when you want something installed, when you need an expert — the experience should be seamless, respectful, and flawless. Our home service professionals don&apos;t just fix problems. They arrive on time, communicate clearly, clean up after themselves, and leave your space better than they found it. From AC repair and plumbing to deep cleaning and modular kitchen installation — every visit is designed to feel effortless for you. That&apos;s not a promise we make lightly. It&apos;s a promise backed by rigorous training, real-time accountability, and a relentless commitment to your satisfaction.
              </p>
            </div>
            <div className="standard-block">
              <h3 className="standard-heading">Professional Services That Actually Deliver</h3>
              <p className="standard-text">
                The legal document that protects your life&apos;s work. The chartered accountant who saves your business lakhs every year. The real estate advisor who finds the perfect property. These aren&apos;t transactions — they&apos;re turning points. Our professional services network includes Vadodara&apos;s most accomplished practitioners across law, finance, taxation, insurance, education, and healthcare. We don&apos;t list everyone. We list the ones who are genuinely exceptional at what they do. Because when it comes to decisions that shape your future, &quot;good enough&quot; is never good enough.
              </p>
            </div>
            <div className="standard-block">
              <h3 className="standard-heading">Construction That Stands the Test of Time</h3>
              <p className="standard-text">
                Buildings tell stories. They reflect ambition, care, and the vision of the people who build them. Whether you&apos;re constructing a dream home, renovating a commercial space, building an industrial shed, or planning a luxury villa — our construction and infrastructure partners bring decades of combined expertise to every project. We connect you with architects who think beyond blueprints, contractors who deliver beyond deadlines, and interior designers who transform empty spaces into living masterpieces. Every brick, every beam, every finish — it matters. And we treat it that way.
              </p>
            </div>
            <div className="standard-block">
              <h3 className="standard-heading">Industrial Solutions Built for Scale</h3>
              <p className="standard-text">
                Vadodara&apos;s industrial backbone powers Gujarat&apos;s economy. From the GIDC corridors of Makarpura to the emerging hubs of Savli and Halol Road, thousands of factories, warehouses, and manufacturing units depend on reliable industrial service partners. Our network covers everything — industrial automation, fabrication, welding, CNC machining, water treatment plants, effluent treatment, electrical contracting, and far more. These aren&apos;t generalists dabbling in industrial work. These are specialists who understand tolerances, compliance standards, and the cost of downtime. When your production line stops, every minute matters. Our partners know that, and they act accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section className="section">
        <div className="section-container">
          <div className="commitment-layout">
            <div className="commitment-image">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Team collaboration at VadodaraExperts"
                width={520}
                height={380}
                className="philosophy-img"
              />
            </div>
            <div className="commitment-text">
              <span className="section-tag">Our Commitment</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>We Don&apos;t Cut Corners. We Eliminate Them.</h2>
              <p className="philosophy-text">
                Most service companies optimize for volume. They want more leads, more calls, more transactions. We optimize for something different: the quality of every single experience. Because one perfectly executed project creates more value than a hundred mediocre ones. Our team personally oversees service delivery, follows up on quality, and ensures that every customer walks away not just satisfied — but genuinely impressed.
              </p>
              <p className="philosophy-text">
                This is Vadodara&apos;s service revolution. Not driven by algorithms or automation, but by people who care deeply about the work they do and the city they serve. We&apos;re building something that Vadodara has never had before — a single, trusted name that stands for uncompromising excellence across every service category imaginable.
              </p>
              <p className="philosophy-lead" style={{ fontSize: "18px", marginTop: "20px" }}>
                The future of professional services in Vadodara isn&apos;t coming. It&apos;s already here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Service Areas</span>
            <h2 className="section-title">Serving All of Vadodara</h2>
            <p className="section-subtitle">
              Our services are available across all major areas and localities in Vadodara city.
            </p>
          </div>
          <div className="areas-tags">
            {VADODARA_AREAS.map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
