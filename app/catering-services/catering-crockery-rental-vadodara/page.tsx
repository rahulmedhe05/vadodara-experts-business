import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Catering crockery rental in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional catering crockery rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/catering-crockery-rental-vadodara" },
  openGraph: {
    title: "Catering crockery rental in Vadodara | VadodaraExperts",
    description: "Professional catering crockery rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/catering-crockery-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="catering-crockery-rental-vadodara" />;
}
