import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Hiba deed in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional hiba deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/hiba-deed-vadodara" },
  openGraph: {
    title: "Hiba deed in Vadodara | VadodaraExperts",
    description: "Professional hiba deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/hiba-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hiba-deed-vadodara" />;
}
