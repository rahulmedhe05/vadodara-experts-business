import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart switch panel in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart switch panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-switch-panel-vadodara" },
  openGraph: {
    title: "smart switch panel in Vadodara | VadodaraExperts",
    description: "Professional smart switch panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-switch-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-switch-panel-vadodara" />;
}
