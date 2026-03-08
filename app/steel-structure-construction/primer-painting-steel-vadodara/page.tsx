import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "primer painting steel in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional primer painting steel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/primer-painting-steel-vadodara" },
  openGraph: {
    title: "primer painting steel in Vadodara | VadodaraExperts",
    description: "Professional primer painting steel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/primer-painting-steel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="primer-painting-steel-vadodara" />;
}
