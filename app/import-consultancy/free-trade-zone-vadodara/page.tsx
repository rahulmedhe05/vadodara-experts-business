import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Free trade zone in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional free trade zone services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/free-trade-zone-vadodara" },
  openGraph: {
    title: "Free trade zone in Vadodara | VadodaraExperts",
    description: "Professional free trade zone services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/free-trade-zone-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-trade-zone-vadodara" />;
}
