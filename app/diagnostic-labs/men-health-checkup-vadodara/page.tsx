import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Men health checkup in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional men health checkup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/men-health-checkup-vadodara" },
  openGraph: {
    title: "Men health checkup in Vadodara | VadodaraExperts",
    description: "Professional men health checkup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/men-health-checkup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="men-health-checkup-vadodara" />;
}
