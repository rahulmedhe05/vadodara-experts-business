import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "high capacity solar inverter in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional high capacity solar inverter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/high-capacity-solar-inverter-vadodara" },
  openGraph: {
    title: "high capacity solar inverter in Vadodara | VadodaraExperts",
    description: "Professional high capacity solar inverter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/high-capacity-solar-inverter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-capacity-solar-inverter-vadodara" />;
}
