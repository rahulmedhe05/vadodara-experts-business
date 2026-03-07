import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "rigging safety in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional rigging safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/rigging-safety-vadodara" },
  openGraph: {
    title: "rigging safety in Vadodara | VadodaraExperts",
    description: "Professional rigging safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/rigging-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rigging-safety-vadodara" />;
}
