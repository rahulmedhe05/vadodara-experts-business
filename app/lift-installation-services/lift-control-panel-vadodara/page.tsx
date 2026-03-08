import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift control panel in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift control panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-control-panel-vadodara" },
  openGraph: {
    title: "Lift control panel in Vadodara | VadodaraExperts",
    description: "Professional lift control panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-control-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-control-panel-vadodara" />;
}
