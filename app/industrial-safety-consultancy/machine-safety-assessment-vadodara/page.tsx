import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "machine safety assessment in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional machine safety assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/machine-safety-assessment-vadodara" },
  openGraph: {
    title: "machine safety assessment in Vadodara | VadodaraExperts",
    description: "Professional machine safety assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/machine-safety-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-safety-assessment-vadodara" />;
}
