import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Healthy food catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional healthy food catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/healthy-food-catering-vadodara" },
  openGraph: {
    title: "Healthy food catering in Vadodara | VadodaraExperts",
    description: "Professional healthy food catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/healthy-food-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="healthy-food-catering-vadodara" />;
}
