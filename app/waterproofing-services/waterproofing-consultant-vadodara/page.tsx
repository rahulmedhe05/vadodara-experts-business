import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Waterproofing consultant in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional waterproofing consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/waterproofing-consultant-vadodara" },
  openGraph: {
    title: "Waterproofing consultant in Vadodara | VadodaraExperts",
    description: "Professional waterproofing consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/waterproofing-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waterproofing-consultant-vadodara" />;
}
