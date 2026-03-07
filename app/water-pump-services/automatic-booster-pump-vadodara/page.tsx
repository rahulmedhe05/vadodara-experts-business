import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Automatic booster pump in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional automatic booster pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/automatic-booster-pump-vadodara" },
  openGraph: {
    title: "Automatic booster pump in Vadodara | VadodaraExperts",
    description: "Professional automatic booster pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/automatic-booster-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-booster-pump-vadodara" />;
}
