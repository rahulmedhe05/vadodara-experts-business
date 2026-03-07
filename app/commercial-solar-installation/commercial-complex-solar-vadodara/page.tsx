import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "commercial complex solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional commercial complex solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/commercial-complex-solar-vadodara" },
  openGraph: {
    title: "commercial complex solar in Vadodara | VadodaraExperts",
    description: "Professional commercial complex solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/commercial-complex-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-complex-solar-vadodara" />;
}
