import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "RO storage tank replacement in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional ro storage tank replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/ro-storage-tank-replacement-vadodara" },
  openGraph: {
    title: "RO storage tank replacement in Vadodara | VadodaraExperts",
    description: "Professional ro storage tank replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/ro-storage-tank-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-storage-tank-replacement-vadodara" />;
}
