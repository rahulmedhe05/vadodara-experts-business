import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "antiscalant chemical in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional antiscalant chemical services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/antiscalant-chemical-vadodara" },
  openGraph: {
    title: "antiscalant chemical in Vadodara | VadodaraExperts",
    description: "Professional antiscalant chemical services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/antiscalant-chemical-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="antiscalant-chemical-vadodara" />;
}
