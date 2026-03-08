import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "anchor bolt in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional anchor bolt services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/anchor-bolt-vadodara" },
  openGraph: {
    title: "anchor bolt in Vadodara | VadodaraExperts",
    description: "Professional anchor bolt services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/anchor-bolt-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anchor-bolt-vadodara" />;
}
