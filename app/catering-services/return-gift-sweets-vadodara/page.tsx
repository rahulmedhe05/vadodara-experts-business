import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Return gift sweets in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional return gift sweets services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/return-gift-sweets-vadodara" },
  openGraph: {
    title: "Return gift sweets in Vadodara | VadodaraExperts",
    description: "Professional return gift sweets services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/return-gift-sweets-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="return-gift-sweets-vadodara" />;
}
