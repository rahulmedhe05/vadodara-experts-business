import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cable-tray-services")!;

export const metadata: Metadata = {
  title: "Find Cable Tray Services in Vadodara | Cable Tray Services | VadodaraExperts",
  description: "Professional find cable tray services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cable-tray-services/find-cable-tray-services-vadodara" },
  openGraph: {
    title: "Find Cable Tray Services in Vadodara | VadodaraExperts",
    description: "Professional find cable tray services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cable-tray-services/find-cable-tray-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="find-cable-tray-services-vadodara" />;
}
