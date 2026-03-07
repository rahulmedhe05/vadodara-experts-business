import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "best industrial project consultant in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional best industrial project consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/best-industrial-project-consultant-vadodara" },
  openGraph: {
    title: "best industrial project consultant in Vadodara | VadodaraExperts",
    description: "Professional best industrial project consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/best-industrial-project-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-industrial-project-consultant-vadodara" />;
}
