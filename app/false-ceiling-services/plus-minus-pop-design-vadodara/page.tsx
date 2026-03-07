import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Plus minus POP design in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional plus minus pop design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/plus-minus-pop-design-vadodara" },
  openGraph: {
    title: "Plus minus POP design in Vadodara | VadodaraExperts",
    description: "Professional plus minus pop design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/plus-minus-pop-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plus-minus-pop-design-vadodara" />;
}
