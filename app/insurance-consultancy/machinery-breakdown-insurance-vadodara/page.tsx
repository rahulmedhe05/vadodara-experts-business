import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Machinery breakdown insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional machinery breakdown insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/machinery-breakdown-insurance-vadodara" },
  openGraph: {
    title: "Machinery breakdown insurance in Vadodara | VadodaraExperts",
    description: "Professional machinery breakdown insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/machinery-breakdown-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machinery-breakdown-insurance-vadodara" />;
}
