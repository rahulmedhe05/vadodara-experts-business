import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "personal protective equipment in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional personal protective equipment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/personal-protective-equipment-vadodara" },
  openGraph: {
    title: "personal protective equipment in Vadodara | VadodaraExperts",
    description: "Professional personal protective equipment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/personal-protective-equipment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-protective-equipment-vadodara" />;
}
