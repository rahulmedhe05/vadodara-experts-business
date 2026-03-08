import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Irrevocable POA in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional irrevocable poa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/irrevocable-poa-vadodara" },
  openGraph: {
    title: "Irrevocable POA in Vadodara | VadodaraExperts",
    description: "Professional irrevocable poa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/irrevocable-poa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="irrevocable-poa-vadodara" />;
}
