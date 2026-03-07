import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Booster pump for flat in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional booster pump for flat services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/booster-pump-for-flat-vadodara" },
  openGraph: {
    title: "Booster pump for flat in Vadodara | VadodaraExperts",
    description: "Professional booster pump for flat services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/booster-pump-for-flat-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="booster-pump-for-flat-vadodara" />;
}
