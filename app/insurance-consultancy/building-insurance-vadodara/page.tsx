import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Building insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional building insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/building-insurance-vadodara" },
  openGraph: {
    title: "Building insurance in Vadodara | VadodaraExperts",
    description: "Professional building insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/building-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-insurance-vadodara" />;
}
