import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "structured cabling home in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional structured cabling home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/structured-cabling-home-vadodara" },
  openGraph: {
    title: "structured cabling home in Vadodara | VadodaraExperts",
    description: "Professional structured cabling home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/structured-cabling-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structured-cabling-home-vadodara" />;
}
