import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "waste heat recovery boiler in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional waste heat recovery boiler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/waste-heat-recovery-boiler-vadodara" },
  openGraph: {
    title: "waste heat recovery boiler in Vadodara | VadodaraExperts",
    description: "Professional waste heat recovery boiler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/waste-heat-recovery-boiler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waste-heat-recovery-boiler-vadodara" />;
}
