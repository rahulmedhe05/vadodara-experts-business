import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO pump repair in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro pump repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-pump-repair-vadodara" },
  openGraph: {
    title: "RO pump repair in Vadodara | VadodaraExperts",
    description: "Professional ro pump repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-pump-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-pump-repair-vadodara" />;
}
