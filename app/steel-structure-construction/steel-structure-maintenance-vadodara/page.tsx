import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel structure maintenance in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel structure maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-maintenance-vadodara" },
  openGraph: {
    title: "steel structure maintenance in Vadodara | VadodaraExperts",
    description: "Professional steel structure maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-structure-maintenance-vadodara" />;
}
