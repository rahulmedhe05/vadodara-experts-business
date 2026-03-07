import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Gratuity fund management in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional gratuity fund management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/gratuity-fund-management-vadodara" },
  openGraph: {
    title: "Gratuity fund management in Vadodara | VadodaraExperts",
    description: "Professional gratuity fund management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/gratuity-fund-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gratuity-fund-management-vadodara" />;
}
