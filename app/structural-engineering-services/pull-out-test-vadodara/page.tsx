import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Pull out test in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional pull out test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/pull-out-test-vadodara" },
  openGraph: {
    title: "Pull out test in Vadodara | VadodaraExperts",
    description: "Professional pull out test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/pull-out-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pull-out-test-vadodara" />;
}
