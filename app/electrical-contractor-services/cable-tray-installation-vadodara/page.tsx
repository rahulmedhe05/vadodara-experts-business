import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "cable tray installation in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional cable tray installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/cable-tray-installation-vadodara" },
  openGraph: {
    title: "cable tray installation in Vadodara | VadodaraExperts",
    description: "Professional cable tray installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/cable-tray-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-tray-installation-vadodara" />;
}
