import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "reflective roof coating in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional reflective roof coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/reflective-roof-coating-vadodara" },
  openGraph: {
    title: "reflective roof coating in Vadodara | VadodaraExperts",
    description: "Professional reflective roof coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/reflective-roof-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reflective-roof-coating-vadodara" />;
}
