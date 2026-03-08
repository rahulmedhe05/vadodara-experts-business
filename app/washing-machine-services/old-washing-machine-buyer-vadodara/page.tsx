import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Old washing machine buyer in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional old washing machine buyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/old-washing-machine-buyer-vadodara" },
  openGraph: {
    title: "Old washing machine buyer in Vadodara | VadodaraExperts",
    description: "Professional old washing machine buyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/old-washing-machine-buyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-washing-machine-buyer-vadodara" />;
}
