import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "light gauge steel construction in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional light gauge steel construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/light-gauge-steel-construction-vadodara" },
  openGraph: {
    title: "light gauge steel construction in Vadodara | VadodaraExperts",
    description: "Professional light gauge steel construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/light-gauge-steel-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="light-gauge-steel-construction-vadodara" />;
}
