import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "UV water purifier repair in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional uv water purifier repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/uv-water-purifier-repair-vadodara" },
  openGraph: {
    title: "UV water purifier repair in Vadodara | VadodaraExperts",
    description: "Professional uv water purifier repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/uv-water-purifier-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="uv-water-purifier-repair-vadodara" />;
}
