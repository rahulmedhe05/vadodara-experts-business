import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "high strength bolt in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional high strength bolt services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/high-strength-bolt-vadodara" },
  openGraph: {
    title: "high strength bolt in Vadodara | VadodaraExperts",
    description: "Professional high strength bolt services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/high-strength-bolt-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-strength-bolt-vadodara" />;
}
