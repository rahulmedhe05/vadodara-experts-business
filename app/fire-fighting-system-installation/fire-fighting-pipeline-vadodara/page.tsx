import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "fire fighting pipeline in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional fire fighting pipeline services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-pipeline-vadodara" },
  openGraph: {
    title: "fire fighting pipeline in Vadodara | VadodaraExperts",
    description: "Professional fire fighting pipeline services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-pipeline-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-fighting-pipeline-vadodara" />;
}
