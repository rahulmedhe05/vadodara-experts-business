import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "cage ladder in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional cage ladder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/cage-ladder-vadodara" },
  openGraph: {
    title: "cage ladder in Vadodara | VadodaraExperts",
    description: "Professional cage ladder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/cage-ladder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cage-ladder-vadodara" />;
}
