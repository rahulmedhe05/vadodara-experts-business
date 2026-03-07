import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "tri vector meter in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional tri vector meter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/tri-vector-meter-vadodara" },
  openGraph: {
    title: "tri vector meter in Vadodara | VadodaraExperts",
    description: "Professional tri vector meter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/tri-vector-meter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tri-vector-meter-vadodara" />;
}
