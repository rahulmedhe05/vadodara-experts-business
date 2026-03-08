import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "air cooled condenser in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional air cooled condenser services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/air-cooled-condenser-vadodara" },
  openGraph: {
    title: "air cooled condenser in Vadodara | VadodaraExperts",
    description: "Professional air cooled condenser services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/air-cooled-condenser-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-cooled-condenser-vadodara" />;
}
