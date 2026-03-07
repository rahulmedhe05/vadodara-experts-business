import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "mechanical AMC in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional mechanical amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-amc-vadodara" },
  openGraph: {
    title: "mechanical AMC in Vadodara | VadodaraExperts",
    description: "Professional mechanical amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-amc-vadodara" />;
}
