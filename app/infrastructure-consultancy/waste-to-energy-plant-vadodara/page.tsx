import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "waste to energy plant in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional waste to energy plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/waste-to-energy-plant-vadodara" },
  openGraph: {
    title: "waste to energy plant in Vadodara | VadodaraExperts",
    description: "Professional waste to energy plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/waste-to-energy-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waste-to-energy-plant-vadodara" />;
}
