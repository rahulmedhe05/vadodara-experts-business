import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "energy modelling in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional energy modelling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/energy-modelling-vadodara" },
  openGraph: {
    title: "energy modelling in Vadodara | VadodaraExperts",
    description: "Professional energy modelling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/energy-modelling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-modelling-vadodara" />;
}
