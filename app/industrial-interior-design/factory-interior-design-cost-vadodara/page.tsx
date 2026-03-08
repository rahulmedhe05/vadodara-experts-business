import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory interior design cost in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory interior design cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-interior-design-cost-vadodara" },
  openGraph: {
    title: "factory interior design cost in Vadodara | VadodaraExperts",
    description: "Professional factory interior design cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-interior-design-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-interior-design-cost-vadodara" />;
}
