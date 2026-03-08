import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "silica gel breather in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional silica gel breather services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/silica-gel-breather-vadodara" },
  openGraph: {
    title: "silica gel breather in Vadodara | VadodaraExperts",
    description: "Professional silica gel breather services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/silica-gel-breather-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="silica-gel-breather-vadodara" />;
}
