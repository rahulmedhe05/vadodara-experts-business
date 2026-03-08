import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "multi site commercial solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional multi site commercial solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/multi-site-commercial-solar-vadodara" },
  openGraph: {
    title: "multi site commercial solar in Vadodara | VadodaraExperts",
    description: "Professional multi site commercial solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/multi-site-commercial-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-site-commercial-solar-vadodara" />;
}
