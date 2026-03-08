import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Dryer not heating in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional dryer not heating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/dryer-not-heating-vadodara" },
  openGraph: {
    title: "Dryer not heating in Vadodara | VadodaraExperts",
    description: "Professional dryer not heating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/dryer-not-heating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dryer-not-heating-vadodara" />;
}
