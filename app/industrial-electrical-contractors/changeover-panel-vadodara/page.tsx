import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "changeover panel in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional changeover panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/changeover-panel-vadodara" },
  openGraph: {
    title: "changeover panel in Vadodara | VadodaraExperts",
    description: "Professional changeover panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/changeover-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="changeover-panel-vadodara" />;
}
