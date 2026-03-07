import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "standing seam roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional standing seam roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/standing-seam-roofing-vadodara" },
  openGraph: {
    title: "standing seam roofing in Vadodara | VadodaraExperts",
    description: "Professional standing seam roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/standing-seam-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="standing-seam-roofing-vadodara" />;
}
