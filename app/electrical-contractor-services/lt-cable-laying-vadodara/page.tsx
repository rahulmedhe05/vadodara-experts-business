import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "LT cable laying in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional lt cable laying services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/lt-cable-laying-vadodara" },
  openGraph: {
    title: "LT cable laying in Vadodara | VadodaraExperts",
    description: "Professional lt cable laying services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/lt-cable-laying-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lt-cable-laying-vadodara" />;
}
