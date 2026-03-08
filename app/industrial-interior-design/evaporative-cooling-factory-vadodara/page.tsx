import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "evaporative cooling factory in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional evaporative cooling factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/evaporative-cooling-factory-vadodara" },
  openGraph: {
    title: "evaporative cooling factory in Vadodara | VadodaraExperts",
    description: "Professional evaporative cooling factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/evaporative-cooling-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="evaporative-cooling-factory-vadodara" />;
}
