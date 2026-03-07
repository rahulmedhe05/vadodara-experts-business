import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "hydro testing in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional hydro testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/hydro-testing-vadodara" },
  openGraph: {
    title: "hydro testing in Vadodara | VadodaraExperts",
    description: "Professional hydro testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/hydro-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydro-testing-vadodara" />;
}
