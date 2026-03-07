import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Balloon column in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional balloon column services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/balloon-column-vadodara" },
  openGraph: {
    title: "Balloon column in Vadodara | VadodaraExperts",
    description: "Professional balloon column services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/balloon-column-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="balloon-column-vadodara" />;
}
