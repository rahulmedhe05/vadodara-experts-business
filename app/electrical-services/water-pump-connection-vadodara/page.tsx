import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Water pump connection in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional water pump connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/water-pump-connection-vadodara" },
  openGraph: {
    title: "Water pump connection in Vadodara | VadodaraExperts",
    description: "Professional water pump connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/water-pump-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-pump-connection-vadodara" />;
}
