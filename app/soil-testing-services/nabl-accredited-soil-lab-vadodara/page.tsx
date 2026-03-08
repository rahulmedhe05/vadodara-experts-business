import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "NABL accredited soil lab in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional nabl accredited soil lab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/nabl-accredited-soil-lab-vadodara" },
  openGraph: {
    title: "NABL accredited soil lab in Vadodara | VadodaraExperts",
    description: "Professional nabl accredited soil lab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/nabl-accredited-soil-lab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nabl-accredited-soil-lab-vadodara" />;
}
