import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO motor not working in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro motor not working services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-motor-not-working-vadodara" },
  openGraph: {
    title: "RO motor not working in Vadodara | VadodaraExperts",
    description: "Professional ro motor not working services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-motor-not-working-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-motor-not-working-vadodara" />;
}
