import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "substation construction in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional substation construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/substation-construction-vadodara" },
  openGraph: {
    title: "substation construction in Vadodara | VadodaraExperts",
    description: "Professional substation construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/substation-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="substation-construction-vadodara" />;
}
