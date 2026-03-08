import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cable-tray-services")!;

export const metadata: Metadata = {
  title: "Cable Tray Services Weekend Service in Vadodara | Cable Tray Services | VadodaraExperts",
  description: "Professional cable tray services weekend service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-weekend-service-vadodara" },
  openGraph: {
    title: "Cable Tray Services Weekend Service in Vadodara | VadodaraExperts",
    description: "Professional cable tray services weekend service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cable-tray-services/cable-tray-services-weekend-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-tray-services-weekend-service-vadodara" />;
}
