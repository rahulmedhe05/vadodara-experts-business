import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "wheeling solar power in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional wheeling solar power services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/wheeling-solar-power-vadodara" },
  openGraph: {
    title: "wheeling solar power in Vadodara | VadodaraExperts",
    description: "Professional wheeling solar power services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/wheeling-solar-power-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wheeling-solar-power-vadodara" />;
}
