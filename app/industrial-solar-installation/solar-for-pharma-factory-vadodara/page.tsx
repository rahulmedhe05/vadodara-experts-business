import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "solar for pharma factory in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional solar for pharma factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/solar-for-pharma-factory-vadodara" },
  openGraph: {
    title: "solar for pharma factory in Vadodara | VadodaraExperts",
    description: "Professional solar for pharma factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/solar-for-pharma-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-for-pharma-factory-vadodara" />;
}
