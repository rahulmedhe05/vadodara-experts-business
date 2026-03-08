import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Pesticide waste disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional pesticide waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/pesticide-waste-disposal-vadodara" },
  openGraph: {
    title: "Pesticide waste disposal in Vadodara | VadodaraExperts",
    description: "Professional pesticide waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/pesticide-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pesticide-waste-disposal-vadodara" />;
}
