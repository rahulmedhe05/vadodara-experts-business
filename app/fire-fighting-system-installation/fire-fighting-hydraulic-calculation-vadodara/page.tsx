import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "fire fighting hydraulic calculation in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional fire fighting hydraulic calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-hydraulic-calculation-vadodara" },
  openGraph: {
    title: "fire fighting hydraulic calculation in Vadodara | VadodaraExperts",
    description: "Professional fire fighting hydraulic calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-hydraulic-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-fighting-hydraulic-calculation-vadodara" />;
}
