import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "property card consultancy in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional property card consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/property-card-consultancy-vadodara" },
  openGraph: {
    title: "property card consultancy in Vadodara | VadodaraExperts",
    description: "Professional property card consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/property-card-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-card-consultancy-vadodara" />;
}
