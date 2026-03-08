import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "spray booth exhaust in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional spray booth exhaust services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/spray-booth-exhaust-vadodara" },
  openGraph: {
    title: "spray booth exhaust in Vadodara | VadodaraExperts",
    description: "Professional spray booth exhaust services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/spray-booth-exhaust-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spray-booth-exhaust-vadodara" />;
}
