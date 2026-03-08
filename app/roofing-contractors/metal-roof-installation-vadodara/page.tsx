import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "metal roof installation in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional metal roof installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/metal-roof-installation-vadodara" },
  openGraph: {
    title: "metal roof installation in Vadodara | VadodaraExperts",
    description: "Professional metal roof installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/metal-roof-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-roof-installation-vadodara" />;
}
