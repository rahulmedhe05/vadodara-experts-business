import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "earth resistance test in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional earth resistance test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/earth-resistance-test-vadodara" },
  openGraph: {
    title: "earth resistance test in Vadodara | VadodaraExperts",
    description: "Professional earth resistance test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/earth-resistance-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="earth-resistance-test-vadodara" />;
}
