import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift overspeed governor in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift overspeed governor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-overspeed-governor-vadodara" },
  openGraph: {
    title: "Lift overspeed governor in Vadodara | VadodaraExperts",
    description: "Professional lift overspeed governor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-overspeed-governor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-overspeed-governor-vadodara" />;
}
