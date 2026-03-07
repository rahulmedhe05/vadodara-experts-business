import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Dryer vent cleaning in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional dryer vent cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/dryer-vent-cleaning-vadodara" },
  openGraph: {
    title: "Dryer vent cleaning in Vadodara | VadodaraExperts",
    description: "Professional dryer vent cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/dryer-vent-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dryer-vent-cleaning-vadodara" />;
}
