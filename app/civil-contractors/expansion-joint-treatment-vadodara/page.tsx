import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Expansion joint treatment in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional expansion joint treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/expansion-joint-treatment-vadodara" },
  openGraph: {
    title: "Expansion joint treatment in Vadodara | VadodaraExperts",
    description: "Professional expansion joint treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/expansion-joint-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="expansion-joint-treatment-vadodara" />;
}
