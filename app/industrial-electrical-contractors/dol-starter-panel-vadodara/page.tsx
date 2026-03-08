import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "DOL starter panel in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional dol starter panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/dol-starter-panel-vadodara" },
  openGraph: {
    title: "DOL starter panel in Vadodara | VadodaraExperts",
    description: "Professional dol starter panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/dol-starter-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dol-starter-panel-vadodara" />;
}
