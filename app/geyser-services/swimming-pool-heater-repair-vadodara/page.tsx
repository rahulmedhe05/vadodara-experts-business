import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Swimming pool heater repair in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional swimming pool heater repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/swimming-pool-heater-repair-vadodara" },
  openGraph: {
    title: "Swimming pool heater repair in Vadodara | VadodaraExperts",
    description: "Professional swimming pool heater repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/swimming-pool-heater-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-heater-repair-vadodara" />;
}
