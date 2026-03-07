import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "GI pipe fire fighting in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional gi pipe fire fighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/gi-pipe-fire-fighting-vadodara" },
  openGraph: {
    title: "GI pipe fire fighting in Vadodara | VadodaraExperts",
    description: "Professional gi pipe fire fighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/gi-pipe-fire-fighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-pipe-fire-fighting-vadodara" />;
}
