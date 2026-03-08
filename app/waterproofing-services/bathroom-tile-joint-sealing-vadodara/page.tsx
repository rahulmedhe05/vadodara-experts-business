import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Bathroom tile joint sealing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional bathroom tile joint sealing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/bathroom-tile-joint-sealing-vadodara" },
  openGraph: {
    title: "Bathroom tile joint sealing in Vadodara | VadodaraExperts",
    description: "Professional bathroom tile joint sealing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/bathroom-tile-joint-sealing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bathroom-tile-joint-sealing-vadodara" />;
}
