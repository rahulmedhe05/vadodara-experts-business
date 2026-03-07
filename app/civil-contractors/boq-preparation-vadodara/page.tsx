import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "BOQ preparation in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional boq preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/boq-preparation-vadodara" },
  openGraph: {
    title: "BOQ preparation in Vadodara | VadodaraExperts",
    description: "Professional boq preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/boq-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boq-preparation-vadodara" />;
}
