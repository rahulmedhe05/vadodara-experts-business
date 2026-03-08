import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "foam fire suppression in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional foam fire suppression services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/foam-fire-suppression-vadodara" },
  openGraph: {
    title: "foam fire suppression in Vadodara | VadodaraExperts",
    description: "Professional foam fire suppression services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/foam-fire-suppression-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foam-fire-suppression-vadodara" />;
}
