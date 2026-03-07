import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "best industrial safety consultant in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional best industrial safety consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/best-industrial-safety-consultant-vadodara" },
  openGraph: {
    title: "best industrial safety consultant in Vadodara | VadodaraExperts",
    description: "Professional best industrial safety consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/best-industrial-safety-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-industrial-safety-consultant-vadodara" />;
}
