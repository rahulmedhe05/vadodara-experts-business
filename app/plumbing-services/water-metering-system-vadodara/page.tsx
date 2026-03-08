import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Water metering system in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional water metering system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/water-metering-system-vadodara" },
  openGraph: {
    title: "Water metering system in Vadodara | VadodaraExperts",
    description: "Professional water metering system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/water-metering-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-metering-system-vadodara" />;
}
