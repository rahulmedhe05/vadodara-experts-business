import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Navratri decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional navratri decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/navratri-decoration-vadodara" },
  openGraph: {
    title: "Navratri decoration in Vadodara | VadodaraExperts",
    description: "Professional navratri decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/navratri-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="navratri-decoration-vadodara" />;
}
