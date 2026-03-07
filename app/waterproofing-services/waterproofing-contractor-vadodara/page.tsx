import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Waterproofing contractor in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional waterproofing contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/waterproofing-contractor-vadodara" },
  openGraph: {
    title: "Waterproofing contractor in Vadodara | VadodaraExperts",
    description: "Professional waterproofing contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/waterproofing-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waterproofing-contractor-vadodara" />;
}
