import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Thermal insulation ceiling in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional thermal insulation ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/thermal-insulation-ceiling-vadodara" },
  openGraph: {
    title: "Thermal insulation ceiling in Vadodara | VadodaraExperts",
    description: "Professional thermal insulation ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/thermal-insulation-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermal-insulation-ceiling-vadodara" />;
}
