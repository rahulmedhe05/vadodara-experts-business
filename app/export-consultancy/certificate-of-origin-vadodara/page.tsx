import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Certificate of origin in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional certificate of origin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/certificate-of-origin-vadodara" },
  openGraph: {
    title: "Certificate of origin in Vadodara | VadodaraExperts",
    description: "Professional certificate of origin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/certificate-of-origin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="certificate-of-origin-vadodara" />;
}
