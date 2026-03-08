import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "rate of rise heat detector in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional rate of rise heat detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/rate-of-rise-heat-detector-vadodara" },
  openGraph: {
    title: "rate of rise heat detector in Vadodara | VadodaraExperts",
    description: "Professional rate of rise heat detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/rate-of-rise-heat-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rate-of-rise-heat-detector-vadodara" />;
}
