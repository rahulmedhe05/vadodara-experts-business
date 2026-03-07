import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "visitor area design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional visitor area design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/visitor-area-design-vadodara" },
  openGraph: {
    title: "visitor area design in Vadodara | VadodaraExperts",
    description: "Professional visitor area design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/visitor-area-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="visitor-area-design-vadodara" />;
}
