import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Laboratory waste disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional laboratory waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/laboratory-waste-disposal-vadodara" },
  openGraph: {
    title: "Laboratory waste disposal in Vadodara | VadodaraExperts",
    description: "Professional laboratory waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/laboratory-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laboratory-waste-disposal-vadodara" />;
}
