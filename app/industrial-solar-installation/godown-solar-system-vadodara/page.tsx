import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "godown solar system in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional godown solar system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/godown-solar-system-vadodara" },
  openGraph: {
    title: "godown solar system in Vadodara | VadodaraExperts",
    description: "Professional godown solar system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/godown-solar-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="godown-solar-system-vadodara" />;
}
