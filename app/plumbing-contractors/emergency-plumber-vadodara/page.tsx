import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "emergency plumber in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional emergency plumber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/emergency-plumber-vadodara" },
  openGraph: {
    title: "emergency plumber in Vadodara | VadodaraExperts",
    description: "Professional emergency plumber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/emergency-plumber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-plumber-vadodara" />;
}
