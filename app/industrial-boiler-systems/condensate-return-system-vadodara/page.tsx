import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "condensate return system in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional condensate return system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/condensate-return-system-vadodara" },
  openGraph: {
    title: "condensate return system in Vadodara | VadodaraExperts",
    description: "Professional condensate return system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/condensate-return-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="condensate-return-system-vadodara" />;
}
