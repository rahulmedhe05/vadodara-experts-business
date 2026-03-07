import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "MRL lift in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional mrl lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/mrl-lift-vadodara" },
  openGraph: {
    title: "MRL lift in Vadodara | VadodaraExperts",
    description: "Professional mrl lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/mrl-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mrl-lift-vadodara" />;
}
