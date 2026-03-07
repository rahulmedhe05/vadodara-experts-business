import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Smart doorbell wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional smart doorbell wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/smart-doorbell-wiring-vadodara" },
  openGraph: {
    title: "Smart doorbell wiring in Vadodara | VadodaraExperts",
    description: "Professional smart doorbell wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/smart-doorbell-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-doorbell-wiring-vadodara" />;
}
