import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Used oil disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional used oil disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/used-oil-disposal-vadodara" },
  openGraph: {
    title: "Used oil disposal in Vadodara | VadodaraExperts",
    description: "Professional used oil disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/used-oil-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="used-oil-disposal-vadodara" />;
}
