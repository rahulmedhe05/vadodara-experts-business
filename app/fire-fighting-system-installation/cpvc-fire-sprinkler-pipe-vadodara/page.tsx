import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "CPVC fire sprinkler pipe in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional cpvc fire sprinkler pipe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/cpvc-fire-sprinkler-pipe-vadodara" },
  openGraph: {
    title: "CPVC fire sprinkler pipe in Vadodara | VadodaraExperts",
    description: "Professional cpvc fire sprinkler pipe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/cpvc-fire-sprinkler-pipe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cpvc-fire-sprinkler-pipe-vadodara" />;
}
