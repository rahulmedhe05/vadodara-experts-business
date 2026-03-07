import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "False ceiling design in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional false ceiling design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/false-ceiling-design-vadodara" },
  openGraph: {
    title: "False ceiling design in Vadodara | VadodaraExperts",
    description: "Professional false ceiling design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/false-ceiling-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="false-ceiling-design-vadodara" />;
}
