import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roofing services in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roofing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roofing-services-vadodara" },
  openGraph: {
    title: "roofing services in Vadodara | VadodaraExperts",
    description: "Professional roofing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roofing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roofing-services-vadodara" />;
}
