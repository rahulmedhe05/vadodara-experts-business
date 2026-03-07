import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Chandelier cutout ceiling in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional chandelier cutout ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/chandelier-cutout-ceiling-vadodara" },
  openGraph: {
    title: "Chandelier cutout ceiling in Vadodara | VadodaraExperts",
    description: "Professional chandelier cutout ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/chandelier-cutout-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chandelier-cutout-ceiling-vadodara" />;
}
