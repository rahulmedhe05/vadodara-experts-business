import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "crimp curve roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional crimp curve roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/crimp-curve-roofing-vadodara" },
  openGraph: {
    title: "crimp curve roofing in Vadodara | VadodaraExperts",
    description: "Professional crimp curve roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/crimp-curve-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crimp-curve-roofing-vadodara" />;
}
