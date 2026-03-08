import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "FIEO membership in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional fieo membership services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/fieo-membership-vadodara" },
  openGraph: {
    title: "FIEO membership in Vadodara | VadodaraExperts",
    description: "Professional fieo membership services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/fieo-membership-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fieo-membership-vadodara" />;
}
