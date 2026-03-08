import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "transformer yard in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional transformer yard services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/transformer-yard-vadodara" },
  openGraph: {
    title: "transformer yard in Vadodara | VadodaraExperts",
    description: "Professional transformer yard services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/transformer-yard-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transformer-yard-vadodara" />;
}
