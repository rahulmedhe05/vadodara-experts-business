import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Decoration company in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional decoration company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/decoration-company-vadodara" },
  openGraph: {
    title: "Decoration company in Vadodara | VadodaraExperts",
    description: "Professional decoration company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/decoration-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="decoration-company-vadodara" />;
}
