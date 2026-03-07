import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift controller upgrade in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift controller upgrade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-controller-upgrade-vadodara" },
  openGraph: {
    title: "Lift controller upgrade in Vadodara | VadodaraExperts",
    description: "Professional lift controller upgrade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-controller-upgrade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-controller-upgrade-vadodara" />;
}
