import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Fairy light decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional fairy light decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/fairy-light-decoration-vadodara" },
  openGraph: {
    title: "Fairy light decoration in Vadodara | VadodaraExperts",
    description: "Professional fairy light decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/fairy-light-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fairy-light-decoration-vadodara" />;
}
