import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Inspection certificate in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional inspection certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/inspection-certificate-vadodara" },
  openGraph: {
    title: "Inspection certificate in Vadodara | VadodaraExperts",
    description: "Professional inspection certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/inspection-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inspection-certificate-vadodara" />;
}
