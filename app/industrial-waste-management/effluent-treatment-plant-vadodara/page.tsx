import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Effluent treatment plant in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional effluent treatment plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/effluent-treatment-plant-vadodara" },
  openGraph: {
    title: "Effluent treatment plant in Vadodara | VadodaraExperts",
    description: "Professional effluent treatment plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/effluent-treatment-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="effluent-treatment-plant-vadodara" />;
}
