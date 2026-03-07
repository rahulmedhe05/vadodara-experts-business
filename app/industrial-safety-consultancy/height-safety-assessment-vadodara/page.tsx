import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "height safety assessment in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional height safety assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/height-safety-assessment-vadodara" },
  openGraph: {
    title: "height safety assessment in Vadodara | VadodaraExperts",
    description: "Professional height safety assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/height-safety-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="height-safety-assessment-vadodara" />;
}
