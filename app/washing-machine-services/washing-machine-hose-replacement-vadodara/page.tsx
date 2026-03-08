import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Washing machine hose replacement in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional washing machine hose replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/washing-machine-hose-replacement-vadodara" },
  openGraph: {
    title: "Washing machine hose replacement in Vadodara | VadodaraExperts",
    description: "Professional washing machine hose replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/washing-machine-hose-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="washing-machine-hose-replacement-vadodara" />;
}
