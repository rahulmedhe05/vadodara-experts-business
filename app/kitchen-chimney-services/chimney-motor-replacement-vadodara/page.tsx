import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney motor replacement in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney motor replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-motor-replacement-vadodara" },
  openGraph: {
    title: "Chimney motor replacement in Vadodara | VadodaraExperts",
    description: "Professional chimney motor replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-motor-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-motor-replacement-vadodara" />;
}
