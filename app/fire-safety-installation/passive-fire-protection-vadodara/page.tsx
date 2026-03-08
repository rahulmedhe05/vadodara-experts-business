import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "passive fire protection in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional passive fire protection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/passive-fire-protection-vadodara" },
  openGraph: {
    title: "passive fire protection in Vadodara | VadodaraExperts",
    description: "Professional passive fire protection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/passive-fire-protection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="passive-fire-protection-vadodara" />;
}
