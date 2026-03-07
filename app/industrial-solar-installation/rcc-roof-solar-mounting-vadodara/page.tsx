import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "RCC roof solar mounting in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional rcc roof solar mounting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/rcc-roof-solar-mounting-vadodara" },
  openGraph: {
    title: "RCC roof solar mounting in Vadodara | VadodaraExperts",
    description: "Professional rcc roof solar mounting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/rcc-roof-solar-mounting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rcc-roof-solar-mounting-vadodara" />;
}
