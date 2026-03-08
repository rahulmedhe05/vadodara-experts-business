import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "factory office interior in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional factory office interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/factory-office-interior-vadodara" },
  openGraph: {
    title: "factory office interior in Vadodara | VadodaraExperts",
    description: "Professional factory office interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/factory-office-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-office-interior-vadodara" />;
}
