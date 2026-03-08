import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "chief inspector of boilers in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional chief inspector of boilers services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/chief-inspector-of-boilers-vadodara" },
  openGraph: {
    title: "chief inspector of boilers in Vadodara | VadodaraExperts",
    description: "Professional chief inspector of boilers services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/chief-inspector-of-boilers-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chief-inspector-of-boilers-vadodara" />;
}
