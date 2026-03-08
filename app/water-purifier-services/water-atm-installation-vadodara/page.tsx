import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water ATM installation in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional water atm installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/water-atm-installation-vadodara" },
  openGraph: {
    title: "Water ATM installation in Vadodara | VadodaraExperts",
    description: "Professional water atm installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/water-atm-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-atm-installation-vadodara" />;
}
