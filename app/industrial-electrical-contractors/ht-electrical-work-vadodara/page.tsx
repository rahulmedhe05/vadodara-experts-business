import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "HT electrical work in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional ht electrical work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/ht-electrical-work-vadodara" },
  openGraph: {
    title: "HT electrical work in Vadodara | VadodaraExperts",
    description: "Professional ht electrical work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/ht-electrical-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ht-electrical-work-vadodara" />;
}
