import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "oil type transformer in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional oil type transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/oil-type-transformer-vadodara" },
  openGraph: {
    title: "oil type transformer in Vadodara | VadodaraExperts",
    description: "Professional oil type transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/oil-type-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oil-type-transformer-vadodara" />;
}
