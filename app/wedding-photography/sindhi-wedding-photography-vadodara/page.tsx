import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Sindhi wedding photography in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional sindhi wedding photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/sindhi-wedding-photography-vadodara" },
  openGraph: {
    title: "Sindhi wedding photography in Vadodara | VadodaraExperts",
    description: "Professional sindhi wedding photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/sindhi-wedding-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sindhi-wedding-photography-vadodara" />;
}
