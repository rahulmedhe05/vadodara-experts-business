import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "150 Ah battery in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional 150 ah battery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/150-ah-battery-vadodara" },
  openGraph: {
    title: "150 Ah battery in Vadodara | VadodaraExperts",
    description: "Professional 150 ah battery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/150-ah-battery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="150-ah-battery-vadodara" />;
}
