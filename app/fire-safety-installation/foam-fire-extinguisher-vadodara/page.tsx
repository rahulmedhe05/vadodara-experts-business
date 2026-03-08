import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "foam fire extinguisher in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional foam fire extinguisher services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/foam-fire-extinguisher-vadodara" },
  openGraph: {
    title: "foam fire extinguisher in Vadodara | VadodaraExperts",
    description: "Professional foam fire extinguisher services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/foam-fire-extinguisher-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foam-fire-extinguisher-vadodara" />;
}
