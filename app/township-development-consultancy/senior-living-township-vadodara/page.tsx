import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "senior living township in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional senior living township services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/senior-living-township-vadodara" },
  openGraph: {
    title: "senior living township in Vadodara | VadodaraExperts",
    description: "Professional senior living township services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/senior-living-township-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="senior-living-township-vadodara" />;
}
