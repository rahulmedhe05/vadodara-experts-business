import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "coagulation flocculation in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional coagulation flocculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/coagulation-flocculation-vadodara" },
  openGraph: {
    title: "coagulation flocculation in Vadodara | VadodaraExperts",
    description: "Professional coagulation flocculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/coagulation-flocculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coagulation-flocculation-vadodara" />;
}
