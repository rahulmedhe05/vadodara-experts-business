import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Escalator load test in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional escalator load test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/escalator-load-test-vadodara" },
  openGraph: {
    title: "Escalator load test in Vadodara | VadodaraExperts",
    description: "Professional escalator load test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/escalator-load-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="escalator-load-test-vadodara" />;
}
