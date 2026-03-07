import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Under sink RO installation in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional under sink ro installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/under-sink-ro-installation-vadodara" },
  openGraph: {
    title: "Under sink RO installation in Vadodara | VadodaraExperts",
    description: "Professional under sink ro installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/under-sink-ro-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="under-sink-ro-installation-vadodara" />;
}
