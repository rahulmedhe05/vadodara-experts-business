import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift speed adjustment in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift speed adjustment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-speed-adjustment-vadodara" },
  openGraph: {
    title: "Lift speed adjustment in Vadodara | VadodaraExperts",
    description: "Professional lift speed adjustment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-speed-adjustment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-speed-adjustment-vadodara" />;
}
