import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "HVAC contractor in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional hvac contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/hvac-contractor-vadodara" },
  openGraph: {
    title: "HVAC contractor in Vadodara | VadodaraExperts",
    description: "Professional hvac contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/hvac-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-contractor-vadodara" />;
}
