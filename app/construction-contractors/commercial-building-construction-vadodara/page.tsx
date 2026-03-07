import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Commercial building construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional commercial building construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/commercial-building-construction-vadodara" },
  openGraph: {
    title: "Commercial building construction in Vadodara | VadodaraExperts",
    description: "Professional commercial building construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/commercial-building-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-building-construction-vadodara" />;
}
