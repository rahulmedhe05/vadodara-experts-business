import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "Tekla detailing in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional tekla detailing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/tekla-detailing-vadodara" },
  openGraph: {
    title: "Tekla detailing in Vadodara | VadodaraExperts",
    description: "Professional tekla detailing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/tekla-detailing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tekla-detailing-vadodara" />;
}
