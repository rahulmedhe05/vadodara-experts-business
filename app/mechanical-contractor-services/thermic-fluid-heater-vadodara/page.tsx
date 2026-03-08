import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "thermic fluid heater in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional thermic fluid heater services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/thermic-fluid-heater-vadodara" },
  openGraph: {
    title: "thermic fluid heater in Vadodara | VadodaraExperts",
    description: "Professional thermic fluid heater services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/thermic-fluid-heater-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermic-fluid-heater-vadodara" />;
}
