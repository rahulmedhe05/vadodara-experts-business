import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Commercial water heater installation in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional commercial water heater installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/commercial-water-heater-installation-vadodara" },
  openGraph: {
    title: "Commercial water heater installation in Vadodara | VadodaraExperts",
    description: "Professional commercial water heater installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/commercial-water-heater-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-water-heater-installation-vadodara" />;
}
