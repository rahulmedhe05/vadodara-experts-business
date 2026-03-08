import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "factory layout planning in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional factory layout planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/factory-layout-planning-vadodara" },
  openGraph: {
    title: "factory layout planning in Vadodara | VadodaraExperts",
    description: "Professional factory layout planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/factory-layout-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-layout-planning-vadodara" />;
}
