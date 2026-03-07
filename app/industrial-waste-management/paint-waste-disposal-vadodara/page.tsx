import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Paint waste disposal in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional paint waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/paint-waste-disposal-vadodara" },
  openGraph: {
    title: "Paint waste disposal in Vadodara | VadodaraExperts",
    description: "Professional paint waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/paint-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="paint-waste-disposal-vadodara" />;
}
