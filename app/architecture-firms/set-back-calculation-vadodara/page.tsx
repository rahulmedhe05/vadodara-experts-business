import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Set back calculation in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional set back calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/set-back-calculation-vadodara" },
  openGraph: {
    title: "Set back calculation in Vadodara | VadodaraExperts",
    description: "Professional set back calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/set-back-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="set-back-calculation-vadodara" />;
}
