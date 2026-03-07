import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "pollution control consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional pollution control consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/pollution-control-consultancy-vadodara" },
  openGraph: {
    title: "pollution control consultancy in Vadodara | VadodaraExperts",
    description: "Professional pollution control consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/pollution-control-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pollution-control-consultancy-vadodara" />;
}
