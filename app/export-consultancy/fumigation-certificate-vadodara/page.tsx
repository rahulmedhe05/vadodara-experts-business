import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Fumigation certificate in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional fumigation certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/fumigation-certificate-vadodara" },
  openGraph: {
    title: "Fumigation certificate in Vadodara | VadodaraExperts",
    description: "Professional fumigation certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/fumigation-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fumigation-certificate-vadodara" />;
}
