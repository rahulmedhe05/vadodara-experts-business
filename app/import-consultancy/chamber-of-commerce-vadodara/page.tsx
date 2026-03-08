import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Chamber of commerce in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional chamber of commerce services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/chamber-of-commerce-vadodara" },
  openGraph: {
    title: "Chamber of commerce in Vadodara | VadodaraExperts",
    description: "Professional chamber of commerce services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/chamber-of-commerce-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chamber-of-commerce-vadodara" />;
}
