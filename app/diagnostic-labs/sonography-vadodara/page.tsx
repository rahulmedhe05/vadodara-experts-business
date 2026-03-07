import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Sonography in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional sonography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/sonography-vadodara" },
  openGraph: {
    title: "Sonography in Vadodara | VadodaraExperts",
    description: "Professional sonography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/sonography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sonography-vadodara" />;
}
