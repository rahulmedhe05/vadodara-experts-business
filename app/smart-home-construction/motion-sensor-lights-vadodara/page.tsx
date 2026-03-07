import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "motion sensor lights in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional motion sensor lights services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/motion-sensor-lights-vadodara" },
  openGraph: {
    title: "motion sensor lights in Vadodara | VadodaraExperts",
    description: "Professional motion sensor lights services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/motion-sensor-lights-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="motion-sensor-lights-vadodara" />;
}
