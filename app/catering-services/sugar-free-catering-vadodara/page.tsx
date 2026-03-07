import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Sugar free catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional sugar free catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/sugar-free-catering-vadodara" },
  openGraph: {
    title: "Sugar free catering in Vadodara | VadodaraExperts",
    description: "Professional sugar free catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/sugar-free-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sugar-free-catering-vadodara" />;
}
