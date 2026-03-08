import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Deep well pump in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional deep well pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/deep-well-pump-vadodara" },
  openGraph: {
    title: "Deep well pump in Vadodara | VadodaraExperts",
    description: "Professional deep well pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/deep-well-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="deep-well-pump-vadodara" />;
}
