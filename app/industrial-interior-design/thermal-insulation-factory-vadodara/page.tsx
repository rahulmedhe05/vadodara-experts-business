import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "thermal insulation factory in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional thermal insulation factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/thermal-insulation-factory-vadodara" },
  openGraph: {
    title: "thermal insulation factory in Vadodara | VadodaraExperts",
    description: "Professional thermal insulation factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/thermal-insulation-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="thermal-insulation-factory-vadodara" />;
}
