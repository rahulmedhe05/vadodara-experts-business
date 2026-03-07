import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Dryer motor replacement in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional dryer motor replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/dryer-motor-replacement-vadodara" },
  openGraph: {
    title: "Dryer motor replacement in Vadodara | VadodaraExperts",
    description: "Professional dryer motor replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/dryer-motor-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dryer-motor-replacement-vadodara" />;
}
