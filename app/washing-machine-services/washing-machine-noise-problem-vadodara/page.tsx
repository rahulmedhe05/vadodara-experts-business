import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Washing machine noise problem in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional washing machine noise problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/washing-machine-noise-problem-vadodara" },
  openGraph: {
    title: "Washing machine noise problem in Vadodara | VadodaraExperts",
    description: "Professional washing machine noise problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/washing-machine-noise-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="washing-machine-noise-problem-vadodara" />;
}
