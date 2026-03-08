import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Food catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional food catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/food-catering-vadodara" },
  openGraph: {
    title: "Food catering in Vadodara | VadodaraExperts",
    description: "Professional food catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/food-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-catering-vadodara" />;
}
