import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating quality control in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating quality control services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-quality-control-vadodara" },
  openGraph: {
    title: "plating quality control in Vadodara | VadodaraExperts",
    description: "Professional plating quality control services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-quality-control-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-quality-control-vadodara" />;
}
