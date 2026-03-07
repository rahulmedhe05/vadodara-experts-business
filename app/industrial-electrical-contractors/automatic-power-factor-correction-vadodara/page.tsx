import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "automatic power factor correction in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional automatic power factor correction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/automatic-power-factor-correction-vadodara" },
  openGraph: {
    title: "automatic power factor correction in Vadodara | VadodaraExperts",
    description: "Professional automatic power factor correction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/automatic-power-factor-correction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-power-factor-correction-vadodara" />;
}
