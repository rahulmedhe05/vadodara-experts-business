import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "disaster management plan in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional disaster management plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/disaster-management-plan-vadodara" },
  openGraph: {
    title: "disaster management plan in Vadodara | VadodaraExperts",
    description: "Professional disaster management plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/disaster-management-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="disaster-management-plan-vadodara" />;
}
