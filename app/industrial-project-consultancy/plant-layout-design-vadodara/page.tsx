import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "plant layout design in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional plant layout design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/plant-layout-design-vadodara" },
  openGraph: {
    title: "plant layout design in Vadodara | VadodaraExperts",
    description: "Professional plant layout design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/plant-layout-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plant-layout-design-vadodara" />;
}
