import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator filter replacement in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator filter replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-filter-replacement-vadodara" },
  openGraph: {
    title: "Generator filter replacement in Vadodara | VadodaraExperts",
    description: "Professional generator filter replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-filter-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-filter-replacement-vadodara" />;
}
