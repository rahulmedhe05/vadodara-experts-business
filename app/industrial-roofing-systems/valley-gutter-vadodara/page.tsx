import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "valley gutter in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional valley gutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/valley-gutter-vadodara" },
  openGraph: {
    title: "valley gutter in Vadodara | VadodaraExperts",
    description: "Professional valley gutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/valley-gutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="valley-gutter-vadodara" />;
}
