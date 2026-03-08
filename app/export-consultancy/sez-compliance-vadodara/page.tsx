import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "SEZ compliance in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional sez compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/sez-compliance-vadodara" },
  openGraph: {
    title: "SEZ compliance in Vadodara | VadodaraExperts",
    description: "Professional sez compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/sez-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sez-compliance-vadodara" />;
}
