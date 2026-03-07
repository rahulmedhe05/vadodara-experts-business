import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "arch roof in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional arch roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/arch-roof-vadodara" },
  openGraph: {
    title: "arch roof in Vadodara | VadodaraExperts",
    description: "Professional arch roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/arch-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="arch-roof-vadodara" />;
}
