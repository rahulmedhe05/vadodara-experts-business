import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "occupancy based lighting in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional occupancy based lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/occupancy-based-lighting-vadodara" },
  openGraph: {
    title: "occupancy based lighting in Vadodara | VadodaraExperts",
    description: "Professional occupancy based lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/occupancy-based-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="occupancy-based-lighting-vadodara" />;
}
