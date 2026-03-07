import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Catering order in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional catering order services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/catering-order-vadodara" },
  openGraph: {
    title: "Catering order in Vadodara | VadodaraExperts",
    description: "Professional catering order services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/catering-order-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="catering-order-vadodara" />;
}
