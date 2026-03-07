import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "factory shed foundation in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional factory shed foundation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/factory-shed-foundation-vadodara" },
  openGraph: {
    title: "factory shed foundation in Vadodara | VadodaraExperts",
    description: "Professional factory shed foundation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/factory-shed-foundation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-shed-foundation-vadodara" />;
}
