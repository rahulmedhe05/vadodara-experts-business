import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "plate rolling in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional plate rolling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/plate-rolling-vadodara" },
  openGraph: {
    title: "plate rolling in Vadodara | VadodaraExperts",
    description: "Professional plate rolling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/plate-rolling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plate-rolling-vadodara" />;
}
