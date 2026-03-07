import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "STPI compliance in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional stpi compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/stpi-compliance-vadodara" },
  openGraph: {
    title: "STPI compliance in Vadodara | VadodaraExperts",
    description: "Professional stpi compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/stpi-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stpi-compliance-vadodara" />;
}
