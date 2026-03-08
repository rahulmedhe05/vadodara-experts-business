import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "butterfly roof industrial in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional butterfly roof industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/butterfly-roof-industrial-vadodara" },
  openGraph: {
    title: "butterfly roof industrial in Vadodara | VadodaraExperts",
    description: "Professional butterfly roof industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/butterfly-roof-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="butterfly-roof-industrial-vadodara" />;
}
