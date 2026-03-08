import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-insulation-services")!;

export const metadata: Metadata = {
  title: "glass wool insulation in Vadodara | Industrial Insulation Services | VadodaraExperts",
  description: "Professional glass wool insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-insulation-services/glass-wool-insulation-vadodara" },
  openGraph: {
    title: "glass wool insulation in Vadodara | VadodaraExperts",
    description: "Professional glass wool insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-insulation-services/glass-wool-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-wool-insulation-vadodara" />;
}
