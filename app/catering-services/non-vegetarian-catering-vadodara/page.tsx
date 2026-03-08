import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Non vegetarian catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional non vegetarian catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/non-vegetarian-catering-vadodara" },
  openGraph: {
    title: "Non vegetarian catering in Vadodara | VadodaraExperts",
    description: "Professional non vegetarian catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/non-vegetarian-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-vegetarian-catering-vadodara" />;
}
