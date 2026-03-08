import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "chemical handling safety in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional chemical handling safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/chemical-handling-safety-vadodara" },
  openGraph: {
    title: "chemical handling safety in Vadodara | VadodaraExperts",
    description: "Professional chemical handling safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/chemical-handling-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-handling-safety-vadodara" />;
}
