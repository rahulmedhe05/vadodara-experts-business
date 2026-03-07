import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Chandelier light rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional chandelier light rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/chandelier-light-rental-vadodara" },
  openGraph: {
    title: "Chandelier light rental in Vadodara | VadodaraExperts",
    description: "Professional chandelier light rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/chandelier-light-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chandelier-light-rental-vadodara" />;
}
