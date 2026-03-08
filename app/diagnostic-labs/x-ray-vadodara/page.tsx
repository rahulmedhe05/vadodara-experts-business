import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "X ray in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional x ray services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/x-ray-vadodara" },
  openGraph: {
    title: "X ray in Vadodara | VadodaraExperts",
    description: "Professional x ray services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/x-ray-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="x-ray-vadodara" />;
}
