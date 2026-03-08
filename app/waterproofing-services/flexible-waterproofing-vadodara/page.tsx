import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Flexible waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional flexible waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/flexible-waterproofing-vadodara" },
  openGraph: {
    title: "Flexible waterproofing in Vadodara | VadodaraExperts",
    description: "Professional flexible waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/flexible-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flexible-waterproofing-vadodara" />;
}
