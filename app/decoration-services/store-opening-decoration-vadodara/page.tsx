import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Store opening decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional store opening decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/store-opening-decoration-vadodara" },
  openGraph: {
    title: "Store opening decoration in Vadodara | VadodaraExperts",
    description: "Professional store opening decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/store-opening-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="store-opening-decoration-vadodara" />;
}
