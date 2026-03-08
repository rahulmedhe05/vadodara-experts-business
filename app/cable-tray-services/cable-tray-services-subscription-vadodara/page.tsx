import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cable-tray-services")!;

export const metadata: Metadata = {
  title: "Cable Tray Services Subscription in Vadodara | Cable Tray Services | VadodaraExperts",
  description: "Professional cable tray services subscription services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-subscription-vadodara" },
  openGraph: {
    title: "Cable Tray Services Subscription in Vadodara | VadodaraExperts",
    description: "Professional cable tray services subscription services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-subscription-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-tray-services-subscription-vadodara" />;
}
