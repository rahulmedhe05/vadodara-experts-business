import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Export compliance in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional export compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/export-compliance-vadodara" },
  openGraph: {
    title: "Export compliance in Vadodara | VadodaraExperts",
    description: "Professional export compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/export-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="export-compliance-vadodara" />;
}
