import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell driller in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional borewell driller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/borewell-driller-vadodara" },
  openGraph: {
    title: "Borewell driller in Vadodara | VadodaraExperts",
    description: "Professional borewell driller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/borewell-driller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-driller-vadodara" />;
}
