import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell rehabilitation in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional borewell rehabilitation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/borewell-rehabilitation-vadodara" },
  openGraph: {
    title: "Borewell rehabilitation in Vadodara | VadodaraExperts",
    description: "Professional borewell rehabilitation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/borewell-rehabilitation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-rehabilitation-vadodara" />;
}
