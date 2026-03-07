import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Baraat decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional baraat decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/baraat-decoration-vadodara" },
  openGraph: {
    title: "Baraat decoration in Vadodara | VadodaraExperts",
    description: "Professional baraat decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/baraat-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="baraat-decoration-vadodara" />;
}
