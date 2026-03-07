import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Second hand washing machine in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional second hand washing machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/second-hand-washing-machine-vadodara" },
  openGraph: {
    title: "Second hand washing machine in Vadodara | VadodaraExperts",
    description: "Professional second hand washing machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/second-hand-washing-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-hand-washing-machine-vadodara" />;
}
