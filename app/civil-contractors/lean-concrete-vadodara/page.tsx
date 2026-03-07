import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Lean concrete in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional lean concrete services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/lean-concrete-vadodara" },
  openGraph: {
    title: "Lean concrete in Vadodara | VadodaraExperts",
    description: "Professional lean concrete services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/lean-concrete-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lean-concrete-vadodara" />;
}
