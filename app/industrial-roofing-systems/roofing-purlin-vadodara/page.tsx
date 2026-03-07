import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "roofing purlin in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional roofing purlin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-purlin-vadodara" },
  openGraph: {
    title: "roofing purlin in Vadodara | VadodaraExperts",
    description: "Professional roofing purlin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/roofing-purlin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-purlin-vadodara" />;
}
