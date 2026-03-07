import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "copper winding in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional copper winding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/copper-winding-vadodara" },
  openGraph: {
    title: "copper winding in Vadodara | VadodaraExperts",
    description: "Professional copper winding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/copper-winding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="copper-winding-vadodara" />;
}
