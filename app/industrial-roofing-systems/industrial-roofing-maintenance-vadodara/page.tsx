import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "industrial roofing maintenance in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional industrial roofing maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/industrial-roofing-maintenance-vadodara" },
  openGraph: {
    title: "industrial roofing maintenance in Vadodara | VadodaraExperts",
    description: "Professional industrial roofing maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/industrial-roofing-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-roofing-maintenance-vadodara" />;
}
