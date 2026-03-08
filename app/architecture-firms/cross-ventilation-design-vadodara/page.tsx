import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Cross ventilation design in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional cross ventilation design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/cross-ventilation-design-vadodara" },
  openGraph: {
    title: "Cross ventilation design in Vadodara | VadodaraExperts",
    description: "Professional cross ventilation design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/cross-ventilation-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cross-ventilation-design-vadodara" />;
}
