import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Water tank waterproofing in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional water tank waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/water-tank-waterproofing-vadodara" },
  openGraph: {
    title: "Water tank waterproofing in Vadodara | VadodaraExperts",
    description: "Professional water tank waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/water-tank-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tank-waterproofing-vadodara" />;
}
