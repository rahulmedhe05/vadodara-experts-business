import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Old fridge buyer in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional old fridge buyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/old-fridge-buyer-vadodara" },
  openGraph: {
    title: "Old fridge buyer in Vadodara | VadodaraExperts",
    description: "Professional old fridge buyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/old-fridge-buyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-fridge-buyer-vadodara" />;
}
