import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "United India Insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional united india insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/united-india-insurance-vadodara" },
  openGraph: {
    title: "United India Insurance in Vadodara | VadodaraExperts",
    description: "Professional united india insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/united-india-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="united-india-insurance-vadodara" />;
}
