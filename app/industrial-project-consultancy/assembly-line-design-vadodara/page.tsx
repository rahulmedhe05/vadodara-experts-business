import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "assembly line design in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional assembly line design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/assembly-line-design-vadodara" },
  openGraph: {
    title: "assembly line design in Vadodara | VadodaraExperts",
    description: "Professional assembly line design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/assembly-line-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="assembly-line-design-vadodara" />;
}
