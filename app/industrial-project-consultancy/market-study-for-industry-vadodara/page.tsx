import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "market study for industry in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional market study for industry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/market-study-for-industry-vadodara" },
  openGraph: {
    title: "market study for industry in Vadodara | VadodaraExperts",
    description: "Professional market study for industry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/market-study-for-industry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="market-study-for-industry-vadodara" />;
}
