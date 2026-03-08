import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Mehndi catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional mehndi catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/mehndi-catering-vadodara" },
  openGraph: {
    title: "Mehndi catering in Vadodara | VadodaraExperts",
    description: "Professional mehndi catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/mehndi-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mehndi-catering-vadodara" />;
}
