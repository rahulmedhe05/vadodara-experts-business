import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Wedding gate decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional wedding gate decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/wedding-gate-decoration-vadodara" },
  openGraph: {
    title: "Wedding gate decoration in Vadodara | VadodaraExperts",
    description: "Professional wedding gate decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/wedding-gate-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-gate-decoration-vadodara" />;
}
