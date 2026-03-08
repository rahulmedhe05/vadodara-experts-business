import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Core test concrete in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional core test concrete services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/core-test-concrete-vadodara" },
  openGraph: {
    title: "Core test concrete in Vadodara | VadodaraExperts",
    description: "Professional core test concrete services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/core-test-concrete-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="core-test-concrete-vadodara" />;
}
