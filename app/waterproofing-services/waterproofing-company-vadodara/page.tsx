import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Waterproofing company in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional waterproofing company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/waterproofing-company-vadodara" },
  openGraph: {
    title: "Waterproofing company in Vadodara | VadodaraExperts",
    description: "Professional waterproofing company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/waterproofing-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waterproofing-company-vadodara" />;
}
