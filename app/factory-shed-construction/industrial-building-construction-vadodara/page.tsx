import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-shed-construction")!;

export const metadata: Metadata = {
  title: "industrial building construction in Vadodara | Factory Shed Construction | VadodaraExperts",
  description: "Professional industrial building construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-shed-construction/industrial-building-construction-vadodara" },
  openGraph: {
    title: "industrial building construction in Vadodara | VadodaraExperts",
    description: "Professional industrial building construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-shed-construction/industrial-building-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-building-construction-vadodara" />;
}
