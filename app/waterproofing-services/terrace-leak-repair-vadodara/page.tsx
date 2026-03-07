import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Terrace leak repair in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional terrace leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/terrace-leak-repair-vadodara" },
  openGraph: {
    title: "Terrace leak repair in Vadodara | VadodaraExperts",
    description: "Professional terrace leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/terrace-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-leak-repair-vadodara" />;
}
