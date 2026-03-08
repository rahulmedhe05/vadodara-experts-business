import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Construction firm in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional construction firm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/construction-firm-vadodara" },
  openGraph: {
    title: "Construction firm in Vadodara | VadodaraExperts",
    description: "Professional construction firm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/construction-firm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-firm-vadodara" />;
}
