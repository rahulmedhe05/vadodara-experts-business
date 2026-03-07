import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Society borewell in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional society borewell services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/society-borewell-vadodara" },
  openGraph: {
    title: "Society borewell in Vadodara | VadodaraExperts",
    description: "Professional society borewell services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/society-borewell-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-borewell-vadodara" />;
}
