import Link from "next/link";
import { niches, withSuffix, type Niche } from "@/lib/data";
import { VADODARA_AREAS } from "@/lib/areas";
import NicheHeroForm from "@/components/NicheHeroForm";
import { generatePageContent } from "@/lib/content";

type AreaType = typeof VADODARA_AREAS[number];

export default function AreaNichePage({ area, niche }: { area: AreaType; niche: Niche }) {
  const nicheSlug = niche.slug;
  const areaSlug = area.slug;

  const svc = withSuffix(niche.name, "Services");


  // Call the dynamic content generator to generate rich descriptions, specs, pricing tiers, and neighborhood relevance
  const title = `Best ${svc} in ${area.name} Vadodara`;
  const content = generatePageContent(
    niche.slug,
    niche.name,
    niche.category,
    `${niche.slug}-in-${area.slug}`,
    title,
    area.name,
    area.pin,
    area.landmarks as unknown as string[],
    area.neighbors as unknown as string[]
  );

  const lowPriceNum = content.pricingTiers[0].price.replace(/[^0-9]/g, "");
  const highPriceNum = content.pricingTiers[2].price.replace(/[^0-9]/g, "");

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `VadodaraExperts — ${svc} in ${area.name}`,
        "description": `Top-rated ${svc} in ${area.name}, Vadodara. Certified professionals, affordable pricing, same-day service.`,
        "url": `https://vadodaraexperts.com/${areaSlug}/${nicheSlug}`,
        "telephone": "+91-9876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": area.name,
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "postalCode": area.pin,
          "addressCountry": "IN",
        },
        "areaServed": { "@type": "City", "name": "Vadodara" },
        "priceRange": "₹₹",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": content.ratingValue, "reviewCount": content.reviewCount.toString() },
      },
      {
        "@type": "Service",
        "name": `${svc} in ${area.name} Vadodara`,
        "provider": { "@type": "LocalBusiness", "name": "VadodaraExperts" },
        "areaServed": `${area.name}, Vadodara`,
        "description": `Professional ${svc} available in ${area.name}, Vadodara. Trusted experts, best prices, guaranteed work.`,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": lowPriceNum || "399",
          "highPrice": highPriceNum || "3999",
          "offerCount": "3"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": `How much does ${svc} cost in ${area.name} Vadodara?`, "acceptedAnswer": { "@type": "Answer", "text": `Contact us for a free ${svc} estimate in ${area.name}. Price depends on scope — we provide transparent quotes with no hidden charges.` } },
          { "@type": "Question", "name": `How to find the best ${niche.name} in ${area.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `VadodaraExperts provides verified, certified ${niche.name} experts in ${area.name}. All our professionals are background-checked and rated 4.8★ by 500+ customers.` } },
          { "@type": "Question", "name": `Do you provide same-day ${niche.name} in ${area.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `Yes! We offer same-day and emergency ${niche.name} services across ${area.name} and all areas of Vadodara. WhatsApp us for instant booking.` } },
        ],
      },
    ],
  };

  // Related niches in same category
  const related = niches.filter(n => n.category === niche.category && n.slug !== niche.slug).slice(0, 6);

  // Other areas for this service
  const otherAreas = VADODARA_AREAS.filter(a => a.slug !== area.slug).slice(0, 12);

  const whyUs = [
    { icon: "✅", title: "Verified Experts", desc: `All our ${niche.name} professionals in ${area.name} are background-checked and certified` },
    { icon: "💰", title: "Best Price Guarantee", desc: `Lowest ${svc} rates in ${area.name} — we match any competitor price` },
    { icon: "⚡", title: "Same Day Service", desc: `Emergency ${niche.name} available across ${area.name} within 2-4 hours` },
    { icon: "⭐", title: "4.8★ Rated", desc: `500+ happy customers for ${niche.name} in Vadodara love our service` },
    { icon: "🛡️", title: "Service Guarantee", desc: `90-day warranty on all ${niche.name} work done in ${area.name}` },
    { icon: "📞", title: "24/7 Support", desc: `Round-the-clock customer support for ${niche.name} in ${area.name}` },
  ];

  const faqs = [
    { q: `How much does ${svc} cost in ${area.name}?`, a: `Contact us for a custom ${svc} quote in ${area.name}. We offer a free, no-obligation estimate tailored to your requirement.` },
    { q: `Which is the best ${niche.name} company in ${area.name}?`, a: `VadodaraExperts is the top-rated ${niche.name} provider in ${area.name} with 500+ verified reviews, certified professionals, and a 90-day service guarantee.` },
    { q: `Do you provide ${niche.name} at home in ${area.name}?`, a: `Yes! We provide doorstep ${niche.name} service across ${area.name}, Vadodara. Our experts come to your home, office, or commercial space.` },
    { q: `How quickly can I get ${niche.name} in ${area.name}?`, a: `We offer same-day service for ${niche.name} in ${area.name}. For emergencies, we arrive within 2-4 hours. Book via WhatsApp for fastest response.` },
    { q: `Is your ${niche.name} service in ${area.name} affordable?`, a: `Absolutely. We offer the most competitive ${niche.name} rates in ${area.name} with no hidden charges. Get a free quote before any work begins.` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)", padding: "60px 24px 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 500px" }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: 13, color: "#94a3b8", marginBottom: 16, display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "#94a3b8" }}>Home</Link> <span>/</span>
              <Link href={`/${nicheSlug}`} style={{ color: "#94a3b8" }}>{niche.name}</Link> <span>/</span>
              <span style={{ color: "#22d3ee" }}>{area.name}</span>
            </nav>
            <div style={{ display: "inline-block", background: "rgba(6,182,212,0.15)", color: "#22d3ee", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 999, padding: "5px 16px", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
              ⭐ Top Rated in {area.name} — {content.ratingValue}★ ({content.totalReviewCount}+ Reviews)
            </div>
            <h1 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
              Best {svc} in <span style={{ color: "#22d3ee" }}>{area.name}</span>,<br />Vadodara
            </h1>
<p style={{ fontSize: 17, color: "#94a3b8", margin: "0 0 24px", lineHeight: 1.7 }}>
              Looking for trusted <strong style={{ color: "#e2e8f0" }}>{niche.name} in {area.name}</strong>? VadodaraExperts is {area.name}'s most trusted {niche.name} provider — serving PIN {area.pin} and surrounding localities. Certified experts, same-day availability, 90-day service guarantee. No middlemen — we are the actual service team.
            </p>
            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              {["✅ Certified Experts", "💰 Free Estimate", "⚡ Same Day Service", "🛡️ 90-Day Guarantee"].map(b => (
                <span key={b} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, padding: "6px 14px", fontSize: 13, color: "#e2e8f0" }}>{b}</span>
              ))}
            </div>
            {/* SEO keyword tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[`${niche.name} ${area.name}`, `${niche.name} near me`, `best ${niche.name} Vadodara`, `${niche.name} contact number ${area.name}`].map(tag => (
                <span key={tag} style={{ background: "rgba(79,70,229,0.15)", border: "1px solid rgba(79,70,229,0.3)", borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "#a5b4fc" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: "0 1 380px" }}>
            <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1 }}>
          {[["500+","Happy Customers"],["4.8★","Average Rating"],["2-4 hrs","Response Time"],["90 Days","Service Guarantee"]].map(([val,label]) => (
            <div key={label} style={{ textAlign: "center", padding: "24px 16px" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#4f46e5", letterSpacing: -1 }}>{val}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "64px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ background: "rgba(79,70,229,0.08)", color: "#4f46e5", padding: "4px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600 }}>Why VadodaraExperts</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, margin: "12px 0 10px" }}>
              Why We Are The Best {svc} in {area.name}
            </h2>
            <p style={{ color: "#64748b", maxWidth: 560, margin: "0 auto", fontSize: 16 }}>
              {svc} in {area.name}, Vadodara — certified professionals, guaranteed work, unbeatable prices.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {whyUs.map(item => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "24px 20px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content — Keyword Dense */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 16px" }}>{svc} in {area.name}, Vadodara — Complete Guide</h2>
            
            {/* Dynamic Intro Paragraph */}
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              {content.introParagraph}
            </p>

            {/* Specifications Grid */}
            <div style={{ margin: "24px 0", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-block", width: 4, height: 20, background: "#4f46e5", borderRadius: 99 }}></span>
                Service Specifications & Pincode Coverage
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px 24px" }}>
                {content.specs.map((spec, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: 8, fontSize: 14 }}>
                    <span style={{ color: "#64748b", fontWeight: 500 }}>{spec.label}</span>
                    <span style={{ color: "#0f172a", fontWeight: 600, textAlign: "right" }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Guide Content */}
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              {content.detailedContent}
            </p>

            {/* Local Transit/Landmarks Proximity Section */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, margin: "24px 0" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: "#1e293b" }}>Local Landmarks & Accessibility in {area.name}</h3>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {content.proximityParagraph}
              </p>
            </div>

            {/* Pricing Packages Table */}
            <div style={{ margin: "32px 0" }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>Pricing & Service Packages in {area.name}</h3>
              <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px" }}>
                Select a direct plan that matches your project requirements. VadodaraExperts assigns background-verified in-house experts directly with a written service warranty.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                {content.pricingTiers.map((tier, i) => {
                  const isRec = tier.name.includes("Recommended");
                  return (
                    <div 
                      key={i} 
                      style={{ 
                        border: isRec ? "2px solid #4f46e5" : "1px solid #e2e8f0", 
                        borderRadius: 12, 
                        padding: 20, 
                        background: "#fff", 
                        boxShadow: isRec ? "0 4px 12px rgba(79,70,229,0.08)" : "none",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "between"
                      }}
                    >
                      {isRec && (
                        <span style={{ position: "absolute", top: -12, left: 16, background: "#4f46e5", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Recommended
                        </span>
                      )}
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px", color: "#0f172a" }}>{tier.name}</h4>
                        <div style={{ margin: "10px 0" }}>
                          <span style={{ fontSize: 22, fontWeight: 900, color: "#4f46e5" }}>{tier.price}</span>
                        </div>
                        <p style={{ fontSize: 11, color: "#64748b", margin: "0 0 16px", lineHeight: 1.5 }}>{tier.bestFor}</p>
                        <ul style={{ padding: 0, margin: "0 0 16px", listStyle: "none" }}>
                          {tier.deliverables.map((deliv, idx) => (
                            <li key={idx} style={{ fontSize: 12, color: "#334155", display: "flex", alignItems: "start", gap: 6, marginBottom: 8 }}>
                              <span style={{ color: "#10b981", fontWeight: "bold" }}>✓</span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services List */}
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "24px 0 16px" }}>Our {svc} in {area.name} Include:</h3>
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", padding: 0, listStyle: "none", marginBottom: 32 }}>
              {[`${niche.name} Installation in ${area.name}`,`${niche.name} Repair in ${area.name}`,`${niche.name} Maintenance in ${area.name}`,`${niche.name} Replacement in ${area.name}`,`Emergency ${niche.name} ${area.name}`,`${niche.name} AMC ${area.name}`,`Affordable ${niche.name} ${area.name}`,`Certified ${niche.name} ${area.name}`,`${niche.name} at Home ${area.name}`,`Same Day ${niche.name} ${area.name}`].map(s => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#334155" }}>
                  <span style={{ color: "#4f46e5", fontSize: 16 }}>✓</span> {s}
                </li>
              ))}
            </ul>


            {/* FAQ */}
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>FAQs — {svc} in {area.name}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {faqs.map((faq,i) => (
                <details key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
                  <summary style={{ padding: "14px 18px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "#1e293b" }}>{faq.q}</summary>
                  <p style={{ padding: "0 18px 14px", color: "#475569", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Sticky CTA Sidebar */}
          <div style={{ position: "sticky", top: 80 }}>
            <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
            {/* Area links */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginTop: 20 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.5px", color: "#64748b" }}>{niche.name} in Other Areas</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {otherAreas.map(a => (
                  <Link key={a.slug} href={`/${a.slug}/${nicheSlug}`} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "#4f46e5", fontWeight: 500 }}>
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section style={{ padding: "48px 24px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 20px" }}>Related Services in {area.name}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/${area.slug}/${r.slug}`} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "16px", display: "block", transition: "all 0.2s" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#4f46e5", marginTop: 4 }}>in {area.name} →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Areas for this service */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>{svc} Across All Vadodara Areas</h3>
          <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px" }}>We provide {niche.name} in all major areas of Vadodara with same-day service availability.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {VADODARA_AREAS.map(a => (
              <Link key={a.slug} href={`/${a.slug}/${nicheSlug}`} style={{ background: a.slug === areaSlug ? "#4f46e5" : "#f1f5f9", color: a.slug === areaSlug ? "#fff" : "#334155", border: "1px solid", borderColor: a.slug === areaSlug ? "#4f46e5" : "#e2e8f0", borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
