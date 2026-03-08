import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Air freight in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional air freight services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/air-freight-vadodara" },
  openGraph: {
    title: "Air freight in Vadodara | VadodaraExperts",
    description: "Professional air freight services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/air-freight-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="air-freight-vadodara" />;
}
