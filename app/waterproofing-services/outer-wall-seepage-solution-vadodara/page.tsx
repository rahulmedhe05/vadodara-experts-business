import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Outer wall seepage solution in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional outer wall seepage solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/outer-wall-seepage-solution-vadodara" },
  openGraph: {
    title: "Outer wall seepage solution in Vadodara | VadodaraExperts",
    description: "Professional outer wall seepage solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/outer-wall-seepage-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outer-wall-seepage-solution-vadodara" />;
}
