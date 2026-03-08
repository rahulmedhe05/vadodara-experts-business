import Link from "next/link";
import Image from "next/image";
import { Niche, withSuffix } from "@/lib/data";
import { getNicheImages, getImageAlt } from "@/lib/images";
import { generateNichePageContent } from "@/lib/content";
import { generateTestimonials } from "@/lib/testimonials";
import NicheHeroForm from "@/components/NicheHeroForm";
import NicheFooter from "@/components/NicheFooter";

interface NichePageProps {
  niche: Niche;
}

export default function NichePageTemplate({ niche }: NichePageProps) {
  const images = getNicheImages(niche.slug, niche.category);
  const content = generateNichePageContent(niche.name, niche.category);
  const testimonials = generateTestimonials(niche.slug, niche.name);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vadodaraexperts.com" },
      { "@type": "ListItem", position: 2, name: niche.name, item: `https://vadodaraexperts.com/${niche.slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${niche.name} in Vadodara | VadodaraExperts`,
    description: `Find the best ${withSuffix(niche.name, 'services').toLowerCase()} in Vadodara. Verified experts, affordable pricing, and fast service.`,
    url: `https://vadodaraexperts.com/${niche.slug}`,
    address: { "@type": "PostalAddress", addressLocality: "Vadodara", addressRegion: "Gujarat", addressCountry: "IN" },
    areaServed: { "@type": "City", name: "Vadodara" },
    serviceType: niche.name,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "500", bestRating: "5" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{niche.name}</span>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white py-12 md:py-16 overflow-hidden">
        <Image
          src={images.hero}
          alt={`${withSuffix(niche.name, 'Services')} in Vadodara`}
          fill
          className="object-cover opacity-[0.13] pointer-events-none"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 drop-shadow-lg">{withSuffix(niche.name, 'Services')} in Vadodara</h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-5 leading-relaxed">
              Professional {withSuffix(niche.name, 'services').toLowerCase()} by VadodaraExperts. Our trained team handles all {niche.name.toLowerCase()} needs across Vadodara — affordable pricing, fast response, and quality guaranteed.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-green-500/20 text-green-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#10003; Trained Professionals</span>
              <span className="bg-yellow-500/20 text-yellow-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#9733; 4.8 Rated</span>
              <span className="bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#9889; Same-Day Service</span>
              <span className="bg-purple-500/20 text-purple-200 px-4 py-1.5 rounded-full text-sm font-semibold">&#128176; Free Estimates</span>
            </div>
          </div>
          <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
        </div>
      </section>

      {/* Intro Section with Content */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About {niche.name} in Vadodara</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{content.introSection}</p>
            <div className="my-6 rounded-xl overflow-hidden">
              <Image src={images.content[0]} alt={getImageAlt(niche.name, niche.name)} width={700} height={400} className="w-full h-auto object-cover rounded-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">{withSuffix(niche.name, 'Services')} Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{content.servicesOverview}</p>
          </div>
          <aside>
            <div id="niche-form-side">
              <NicheHeroForm nicheSlug={niche.slug} nicheName={niche.name} category={niche.category} />
            </div>
          </aside>
        </div>
      </section>

      {/* Why Choose + How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose VadodaraExperts for {niche.name}?</h2>
            <div className="space-y-3">
              {content.whyChoosePoints.slice(0, 8).map((point, i) => (
                <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg p-3">
                  <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">How to Book {niche.name} in Vadodara</h2>
            <div className="space-y-4">
              {content.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step[0]}</h3>
                    <p className="text-gray-600 text-sm">{step[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise + Pricing */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Quality Promise for {niche.name}</h2>
            <p className="text-gray-700 leading-relaxed">{content.qualityPromise}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{withSuffix(niche.name, 'Services')} Pricing in Vadodara</h2>
            <p className="text-gray-700 leading-relaxed">{content.pricingInfo}</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">{niche.name} Gallery in Vadodara</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[images.hero, images.content[0], images.content[1] || images.content[0], images.hero].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
              <Image src={`${img}&sig=${niche.slug}-gallery-${i}`} alt={`${niche.name} in Vadodara - Image ${i + 1}`} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Our Customers Say About {niche.name} in Vadodara</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
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
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About {niche.name} in Vadodara</h2>
        <div className="space-y-3">
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
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-6">
        <Link href="/" className="text-blue-600 hover:underline text-sm">&larr; Back to all services</Link>
      </div>

      {/* Niche Footer - Internal keyword links + areas + related niches */}
      <NicheFooter
        nicheSlug={niche.slug}
        nicheName={niche.name}
        category={niche.category}
      />
    </div>
  );
}
