import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "contour mapping for development in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional contour mapping for development services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/contour-mapping-for-development-vadodara" },
  openGraph: {
    title: "contour mapping for development in Vadodara | VadodaraExperts",
    description: "Professional contour mapping for development services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/contour-mapping-for-development-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="contour-mapping-for-development-vadodara" />;
}
