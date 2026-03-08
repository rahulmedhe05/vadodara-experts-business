import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "Z purlin roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional z purlin roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/z-purlin-roofing-vadodara" },
  openGraph: {
    title: "Z purlin roofing in Vadodara | VadodaraExperts",
    description: "Professional z purlin roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/z-purlin-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="z-purlin-roofing-vadodara" />;
}
