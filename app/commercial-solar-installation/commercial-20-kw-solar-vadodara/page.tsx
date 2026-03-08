import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "commercial 20 kW solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional commercial 20 kw solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/commercial-20-kw-solar-vadodara" },
  openGraph: {
    title: "commercial 20 kW solar in Vadodara | VadodaraExperts",
    description: "Professional commercial 20 kw solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/commercial-20-kw-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-20-kw-solar-vadodara" />;
}
