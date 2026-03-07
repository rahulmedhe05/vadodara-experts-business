import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Gift deed drafting in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional gift deed drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/gift-deed-drafting-vadodara" },
  openGraph: {
    title: "Gift deed drafting in Vadodara | VadodaraExperts",
    description: "Professional gift deed drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/gift-deed-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gift-deed-drafting-vadodara" />;
}
