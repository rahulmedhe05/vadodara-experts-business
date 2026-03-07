import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "New construction wiring in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional new construction wiring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/new-construction-wiring-vadodara" },
  openGraph: {
    title: "New construction wiring in Vadodara | VadodaraExperts",
    description: "Professional new construction wiring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/new-construction-wiring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-construction-wiring-vadodara" />;
}
