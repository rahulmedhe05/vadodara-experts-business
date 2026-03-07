import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Lead acid battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional lead acid battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/lead-acid-battery-vadodara" },
  openGraph: {
    title: "Lead acid battery in Vadodara | VadodaraExperts",
    description: "Professional lead acid battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/lead-acid-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lead-acid-battery-vadodara" />;
}
