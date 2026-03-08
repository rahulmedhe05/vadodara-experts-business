import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "8 inch borewell in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional 8 inch borewell services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/8-inch-borewell-vadodara" },
  openGraph: {
    title: "8 inch borewell in Vadodara | VadodaraExperts",
    description: "Professional 8 inch borewell services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/8-inch-borewell-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="8-inch-borewell-vadodara" />;
}
