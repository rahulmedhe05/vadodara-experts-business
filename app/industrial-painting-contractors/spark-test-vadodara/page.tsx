import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "spark test in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional spark test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/spark-test-vadodara" },
  openGraph: {
    title: "spark test in Vadodara | VadodaraExperts",
    description: "Professional spark test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/spark-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spark-test-vadodara" />;
}
