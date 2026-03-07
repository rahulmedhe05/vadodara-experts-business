import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Date palm trimming in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional date palm trimming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/date-palm-trimming-vadodara" },
  openGraph: {
    title: "Date palm trimming in Vadodara | VadodaraExperts",
    description: "Professional date palm trimming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/date-palm-trimming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="date-palm-trimming-vadodara" />;
}
