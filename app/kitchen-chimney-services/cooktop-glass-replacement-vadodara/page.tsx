import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Cooktop glass replacement in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional cooktop glass replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/cooktop-glass-replacement-vadodara" },
  openGraph: {
    title: "Cooktop glass replacement in Vadodara | VadodaraExperts",
    description: "Professional cooktop glass replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/cooktop-glass-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cooktop-glass-replacement-vadodara" />;
}
