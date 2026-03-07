import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "power factor correction in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional power factor correction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/power-factor-correction-vadodara" },
  openGraph: {
    title: "power factor correction in Vadodara | VadodaraExperts",
    description: "Professional power factor correction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/power-factor-correction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-factor-correction-vadodara" />;
}
