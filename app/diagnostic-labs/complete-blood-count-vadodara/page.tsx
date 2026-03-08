import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Complete blood count in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional complete blood count services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/complete-blood-count-vadodara" },
  openGraph: {
    title: "Complete blood count in Vadodara | VadodaraExperts",
    description: "Professional complete blood count services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/complete-blood-count-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="complete-blood-count-vadodara" />;
}
