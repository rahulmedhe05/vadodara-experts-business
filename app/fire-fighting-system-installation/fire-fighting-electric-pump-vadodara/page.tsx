import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "fire fighting electric pump in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional fire fighting electric pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-electric-pump-vadodara" },
  openGraph: {
    title: "fire fighting electric pump in Vadodara | VadodaraExperts",
    description: "Professional fire fighting electric pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/fire-fighting-electric-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-fighting-electric-pump-vadodara" />;
}
