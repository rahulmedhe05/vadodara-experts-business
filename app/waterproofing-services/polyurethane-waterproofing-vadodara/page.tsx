import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Polyurethane waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional polyurethane waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/polyurethane-waterproofing-vadodara" },
  openGraph: {
    title: "Polyurethane waterproofing in Vadodara | VadodaraExperts",
    description: "Professional polyurethane waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/polyurethane-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polyurethane-waterproofing-vadodara" />;
}
