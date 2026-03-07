import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Motor insurance claim in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional motor insurance claim services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/motor-insurance-claim-vadodara" },
  openGraph: {
    title: "Motor insurance claim in Vadodara | VadodaraExperts",
    description: "Professional motor insurance claim services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/motor-insurance-claim-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="motor-insurance-claim-vadodara" />;
}
