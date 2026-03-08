import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "heavy equipment safety in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional heavy equipment safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/heavy-equipment-safety-vadodara" },
  openGraph: {
    title: "heavy equipment safety in Vadodara | VadodaraExperts",
    description: "Professional heavy equipment safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/heavy-equipment-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-equipment-safety-vadodara" />;
}
