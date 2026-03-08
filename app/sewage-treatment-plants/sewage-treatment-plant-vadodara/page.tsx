import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "sewage treatment plant in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional sewage treatment plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/sewage-treatment-plant-vadodara" },
  openGraph: {
    title: "sewage treatment plant in Vadodara | VadodaraExperts",
    description: "Professional sewage treatment plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/sewage-treatment-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sewage-treatment-plant-vadodara" />;
}
