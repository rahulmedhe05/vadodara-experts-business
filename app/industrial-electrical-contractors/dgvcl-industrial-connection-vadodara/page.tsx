import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "DGVCL industrial connection in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional dgvcl industrial connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/dgvcl-industrial-connection-vadodara" },
  openGraph: {
    title: "DGVCL industrial connection in Vadodara | VadodaraExperts",
    description: "Professional dgvcl industrial connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/dgvcl-industrial-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dgvcl-industrial-connection-vadodara" />;
}
