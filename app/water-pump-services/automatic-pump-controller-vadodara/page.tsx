import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Automatic pump controller in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional automatic pump controller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/automatic-pump-controller-vadodara" },
  openGraph: {
    title: "Automatic pump controller in Vadodara | VadodaraExperts",
    description: "Professional automatic pump controller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/automatic-pump-controller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-pump-controller-vadodara" />;
}
