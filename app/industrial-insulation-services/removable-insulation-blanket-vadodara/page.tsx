import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "removable insulation blanket in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional removable insulation blanket services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/removable-insulation-blanket-vadodara" },
  openGraph: {
    title: "removable insulation blanket in Vadodara | VadodaraExperts",
    description: "Professional removable insulation blanket services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/removable-insulation-blanket-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="removable-insulation-blanket-vadodara" />;
}
