import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "MBR technology in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional mbr technology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/mbr-technology-vadodara" },
  openGraph: {
    title: "MBR technology in Vadodara | VadodaraExperts",
    description: "Professional mbr technology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/mbr-technology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mbr-technology-vadodara" />;
}
