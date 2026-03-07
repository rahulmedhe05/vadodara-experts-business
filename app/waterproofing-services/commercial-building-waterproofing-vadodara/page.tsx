import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Commercial building waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional commercial building waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/commercial-building-waterproofing-vadodara" },
  openGraph: {
    title: "Commercial building waterproofing in Vadodara | VadodaraExperts",
    description: "Professional commercial building waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/commercial-building-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-building-waterproofing-vadodara" />;
}
