import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Kids birthday decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional kids birthday decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/kids-birthday-decoration-vadodara" },
  openGraph: {
    title: "Kids birthday decoration in Vadodara | VadodaraExperts",
    description: "Professional kids birthday decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/kids-birthday-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kids-birthday-decoration-vadodara" />;
}
