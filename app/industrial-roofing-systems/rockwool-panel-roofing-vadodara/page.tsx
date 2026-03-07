import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "rockwool panel roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional rockwool panel roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/rockwool-panel-roofing-vadodara" },
  openGraph: {
    title: "rockwool panel roofing in Vadodara | VadodaraExperts",
    description: "Professional rockwool panel roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/rockwool-panel-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rockwool-panel-roofing-vadodara" />;
}
