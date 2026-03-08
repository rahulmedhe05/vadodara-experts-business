import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory weighbridge area in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory weighbridge area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-weighbridge-area-vadodara" },
  openGraph: {
    title: "factory weighbridge area in Vadodara | VadodaraExperts",
    description: "Professional factory weighbridge area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-weighbridge-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-weighbridge-area-vadodara" />;
}
