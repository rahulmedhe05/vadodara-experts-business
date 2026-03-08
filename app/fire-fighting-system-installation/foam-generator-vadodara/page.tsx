import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "foam generator in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional foam generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/foam-generator-vadodara" },
  openGraph: {
    title: "foam generator in Vadodara | VadodaraExperts",
    description: "Professional foam generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/foam-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foam-generator-vadodara" />;
}
