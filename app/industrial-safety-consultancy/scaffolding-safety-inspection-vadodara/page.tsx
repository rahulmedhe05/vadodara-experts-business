import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "scaffolding safety inspection in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional scaffolding safety inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/scaffolding-safety-inspection-vadodara" },
  openGraph: {
    title: "scaffolding safety inspection in Vadodara | VadodaraExperts",
    description: "Professional scaffolding safety inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/scaffolding-safety-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scaffolding-safety-inspection-vadodara" />;
}
