 import Link from "next/link";
import Image from "next/image";
import { Niche, getRelatedNiches, slugToTitle, withSuffix } from "@/lib/data";
import { generatePageContent, vadodaraAreas } from "@/lib/content";
import { getNicheImages, getImageAlt } from "@/lib/images";
import { generateTestimonials } from "@/lib/testimonials";
import { getNicheKeywordSlugs } from "@/lib/niche-keywords";
import NicheHeroForm from "@/components/NicheHeroForm";
import NicheFooter from "@/components/NicheFooter";

interface KeywordPageProps {
  niche: Niche;
  keyword: string;
}

export default function KeywordPageTemplate({ niche, keyword }: KeywordPageProps) {
  const title = slugToTitle(keyword.replace(/-vadodara$/, ''));
  const related = getRelatedNiches(niche.slug, 6);
  const content = generatePageContent(niche.slug, niche.name, niche.category, keyword, title);
  const images = getNicheImages(niche.slug, niche.category);
  const testimonials = generateTestimonials(niche.slug, niche.name, keyword);

  // Pick 12 sibling keywords (from same niche, excluding current)
  const allKeywordSlugs = getNicheKeywordSlugs(niche.slug);
  const siblingKeywords = allKeywordSlugs
    .filter((k) => k !== keyword)
    .slice(0, 12);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vadodaraexperts.com" },
      { "@type": "ListItem", position: 2, name: niche.name, item: `https://vadodaraexperts.com/${niche.slug}` },
      { "@type": "ListItem", position: 3, name: title, item: `https://vadodaraexperts.com/${niche.slug}/${keyword}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${title} in Vadodara`,
    description: `Professional ${withSuffix(title, 'services').toLowerCase()} in Vadodara by VadodaraExperts. Affordable pricing, fast service, and quality guaranteed.`,
    url: `https://vadodaraexperts.com/${niche.slug}/${keyword}`,
    provider: {
      "@type": "LocalBusiness",
      name: "VadodaraExperts",
      address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", addressCountry: "IN" },
    },
    areaServed: { "@type": "City", name: "Vadodara" },
    serviceType: niche.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${niche.slug}`} className="hover:text-blue-600">{niche.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{title}</span>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-12 md:py-16 overflow-hidden">
        <Image
          src={images.hero}
          alt={`${title} in Vadodara`}
          fill
          className="object-cover opacity-[0.13] pointer-events-none"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 drop-shadow-lg">{title} in Vadodara</h1>
            <p className="text-blue-100 text-lg md:text-xl mb-5 max-w-2xl leading-relaxed">
              Professional {withSuffix(title, 'services').toLowerCase()} by VadodaraExperts.
              Affordable pricing, fast response, and quality guaranteed.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-green-500/20 text-green-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#10003; Verified</span>
              <span className="bg-yellow-500/20 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#9733; 4.8 Rated</span>
              <span className="bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#9889; Same-Day</span>
            </div>
          </div>
          <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Content - 700+ words */}
          <div className="lg:col-span-2">
            {/* Intro paragraph */}
            <h2 className="text-2xl font-bold mb-4">{title} — Professional {niche.name} in Vadodara</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{content.introParagraph}</p>

            {/* Content Image */}
            <div className="my-6 rounded-xl overflow-hidden">
              <Image
                src={images.content[0]}
                alt={`${title} service in Vadodara - VadodaraExperts`}
                width={700}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Why Choose Section */}
            <h2 className="text-2xl font-bold mb-4 mt-8">Why Choose VadodaraExperts for {title}?</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {content.whyChoosePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg p-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <h2 className="text-2xl font-bold mb-4">How to Book {title} in Vadodara</h2>
            <div className="space-y-4 mb-8">
              {content.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step[0]}</h3>
                    <p className="text-gray-600 text-sm">{step[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Content Image */}
            <div className="my-6 rounded-xl overflow-hidden">
              <Image
                src={images.content[1] || images.content[0]}
                alt={`Professional ${niche.name.toLowerCase()} in Vadodara`}
                width={700}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            {/* Detailed Content Section */}
            <h2 className="text-2xl font-bold mb-4">Complete Guide to {title} in Vadodara</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{content.detailedContent}</p>

            {/* Keyword Boost */}
            <p className="text-gray-700 leading-relaxed mb-6">{content.keywordBoostSection}</p>

            {/* Image Gallery */}
            <h2 className="text-2xl font-bold mb-4">{niche.name} Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[images.hero, images.content[0], images.content[1] || images.content[0], images.hero, images.content[0], images.content[1] || images.content[0]].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                  <Image src={`${img}&sig=${niche.slug}-kw-${i}`} alt={`${title} in Vadodara - Image ${i + 1}`} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <h2 className="text-2xl font-bold mb-4">What Customers Say About {title}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {testimonials.map((review, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <span key={s} className="text-yellow-400">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.area}, Vadodara</p>
                    </div>
                    <p className="text-gray-400 text-xs">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold mb-4 mt-8">Frequently Asked Questions About {title}</h2>
            <div className="space-y-3 mb-8">
              {content.faqs.map((faq, i) => (
                <details key={i} className="border border-gray-200 rounded-lg group">
                  <summary className="cursor-pointer p-4 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                    {faq.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">&#9660;</span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>

            {/* Area Tags */}
            <h2 className="text-xl font-bold mb-3">{title} — Available Across Vadodara</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {vadodaraAreas.map((area) => (
                <span key={area} className="bg-gray-50 border rounded-full px-3 py-1 text-xs text-gray-600">
                  {niche.name} in {area}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Inquiry Form */}
            <div id="inquiry-form">
              <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
            </div>

            {/* Related Keywords */}
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Related {niche.name} Services</h3>
              <ul className="space-y-2">
                {siblingKeywords.map((kw) => (
                  <li key={kw}>
                    <Link
                      href={`/${niche.slug}/${kw}`}
                      className="text-sm text-gray-600 hover:text-blue-700 no-underline"
                    >
                      {slugToTitle(kw.replace(/-vadodara$/, ''))} Vadodara
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>&#11088; Average Rating: <strong>4.8/5</strong></p>
                <p>&#10004; Trained Professionals: <strong>350+</strong></p>
                <p>&#128205; Areas Covered: <strong>39+</strong></p>
                <p>&#128336; Response Time: <strong>Under 30 min</strong></p>
              </div>
            </div>

            {/* Related Niches */}
            {related.length > 0 && (
              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Explore Other Services</h3>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/${r.slug}`}
                        className="text-sm text-gray-600 hover:text-green-700 no-underline"
                      >
                        {r.name} Vadodara
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Back links */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-4 text-sm">
        <Link href={`/${niche.slug}`} className="text-blue-600 hover:underline">← All {niche.name} Services</Link>
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>

      {/* Niche Footer - Internal links from SAME niche only + areas + longtails */}
      <NicheFooter
        nicheSlug={niche.slug}
        nicheName={niche.name}
        category={niche.category}
        currentKeyword={keyword}
      />
    </div>
  );
}
