import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Battery load test in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional battery load test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/battery-load-test-vadodara" },
  openGraph: {
    title: "Battery load test in Vadodara | VadodaraExperts",
    description: "Professional battery load test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/battery-load-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-load-test-vadodara" />;
}
