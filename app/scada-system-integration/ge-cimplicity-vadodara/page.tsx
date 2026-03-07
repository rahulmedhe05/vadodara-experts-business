import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("scada-system-integration")!;

export const metadata: Metadata = {
  title: "GE CIMPLICITY in Vadodara | SCADA System Integration | VadodaraExperts",
  description: "Professional ge cimplicity services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/scada-system-integration/ge-cimplicity-vadodara" },
  openGraph: {
    title: "GE CIMPLICITY in Vadodara | VadodaraExperts",
    description: "Professional ge cimplicity services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/scada-system-integration/ge-cimplicity-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ge-cimplicity-vadodara" />;
}
