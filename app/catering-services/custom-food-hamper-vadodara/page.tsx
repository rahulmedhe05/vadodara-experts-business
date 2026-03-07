import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Custom food hamper in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional custom food hamper services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/custom-food-hamper-vadodara" },
  openGraph: {
    title: "Custom food hamper in Vadodara | VadodaraExperts",
    description: "Professional custom food hamper services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/custom-food-hamper-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-food-hamper-vadodara" />;
}
