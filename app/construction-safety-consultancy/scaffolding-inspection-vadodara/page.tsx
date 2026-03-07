import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "scaffolding inspection in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional scaffolding inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/scaffolding-inspection-vadodara" },
  openGraph: {
    title: "scaffolding inspection in Vadodara | VadodaraExperts",
    description: "Professional scaffolding inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/scaffolding-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scaffolding-inspection-vadodara" />;
}
