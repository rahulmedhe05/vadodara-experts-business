import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cable-tray-services")!;

export const metadata: Metadata = {
  title: "Cable Tray Services Provider in Vadodara | Cable Tray Services | VadodaraExperts",
  description: "Professional cable tray services provider services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-provider-vadodara" },
  openGraph: {
    title: "Cable Tray Services Provider in Vadodara | VadodaraExperts",
    description: "Professional cable tray services provider services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-provider-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-tray-services-provider-vadodara" />;
}
