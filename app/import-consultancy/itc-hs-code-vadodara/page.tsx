import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "ITC HS code in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional itc hs code services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/itc-hs-code-vadodara" },
  openGraph: {
    title: "ITC HS code in Vadodara | VadodaraExperts",
    description: "Professional itc hs code services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/itc-hs-code-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="itc-hs-code-vadodara" />;
}
