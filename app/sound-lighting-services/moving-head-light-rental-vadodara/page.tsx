import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Moving head light rental in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional moving head light rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/moving-head-light-rental-vadodara" },
  openGraph: {
    title: "Moving head light rental in Vadodara | VadodaraExperts",
    description: "Professional moving head light rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/moving-head-light-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moving-head-light-rental-vadodara" />;
}
