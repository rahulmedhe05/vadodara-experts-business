import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Refrigerator door seal replacement in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional refrigerator door seal replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/refrigerator-door-seal-replacement-vadodara" },
  openGraph: {
    title: "Refrigerator door seal replacement in Vadodara | VadodaraExperts",
    description: "Professional refrigerator door seal replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/refrigerator-door-seal-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-door-seal-replacement-vadodara" />;
}
