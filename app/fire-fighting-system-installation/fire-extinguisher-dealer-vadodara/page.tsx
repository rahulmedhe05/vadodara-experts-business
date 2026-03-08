import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "fire extinguisher dealer in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional fire extinguisher dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-extinguisher-dealer-vadodara" },
  openGraph: {
    title: "fire extinguisher dealer in Vadodara | VadodaraExperts",
    description: "Professional fire extinguisher dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-extinguisher-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-extinguisher-dealer-vadodara" />;
}
