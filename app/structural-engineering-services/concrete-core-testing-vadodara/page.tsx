import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Concrete core testing in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional concrete core testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/concrete-core-testing-vadodara" },
  openGraph: {
    title: "Concrete core testing in Vadodara | VadodaraExperts",
    description: "Professional concrete core testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/concrete-core-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-core-testing-vadodara" />;
}
