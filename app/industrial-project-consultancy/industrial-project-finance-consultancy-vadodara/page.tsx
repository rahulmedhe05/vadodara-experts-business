import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "industrial project finance consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional industrial project finance consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/industrial-project-finance-consultancy-vadodara" },
  openGraph: {
    title: "industrial project finance consultancy in Vadodara | VadodaraExperts",
    description: "Professional industrial project finance consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/industrial-project-finance-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-project-finance-consultancy-vadodara" />;
}
