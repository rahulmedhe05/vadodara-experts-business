import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Navratri catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional navratri catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/navratri-catering-vadodara" },
  openGraph: {
    title: "Navratri catering in Vadodara | VadodaraExperts",
    description: "Professional navratri catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/navratri-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="navratri-catering-vadodara" />;
}
