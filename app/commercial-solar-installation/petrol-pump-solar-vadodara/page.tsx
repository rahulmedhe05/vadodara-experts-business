import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "petrol pump solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional petrol pump solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/petrol-pump-solar-vadodara" },
  openGraph: {
    title: "petrol pump solar in Vadodara | VadodaraExperts",
    description: "Professional petrol pump solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/petrol-pump-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="petrol-pump-solar-vadodara" />;
}
