import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Gypsum partition wall in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional gypsum partition wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/gypsum-partition-wall-vadodara" },
  openGraph: {
    title: "Gypsum partition wall in Vadodara | VadodaraExperts",
    description: "Professional gypsum partition wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/gypsum-partition-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gypsum-partition-wall-vadodara" />;
}
