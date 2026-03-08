import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "steam boiler installation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional steam boiler installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/steam-boiler-installation-vadodara" },
  openGraph: {
    title: "steam boiler installation in Vadodara | VadodaraExperts",
    description: "Professional steam boiler installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/steam-boiler-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-boiler-installation-vadodara" />;
}
