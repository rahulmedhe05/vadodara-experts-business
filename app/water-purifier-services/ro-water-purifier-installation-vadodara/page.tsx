import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO water purifier installation in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro water purifier installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-water-purifier-installation-vadodara" },
  openGraph: {
    title: "RO water purifier installation in Vadodara | VadodaraExperts",
    description: "Professional ro water purifier installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-water-purifier-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-water-purifier-installation-vadodara" />;
}
