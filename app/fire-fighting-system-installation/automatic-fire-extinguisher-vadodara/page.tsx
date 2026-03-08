import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "automatic fire extinguisher in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional automatic fire extinguisher services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/automatic-fire-extinguisher-vadodara" },
  openGraph: {
    title: "automatic fire extinguisher in Vadodara | VadodaraExperts",
    description: "Professional automatic fire extinguisher services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/automatic-fire-extinguisher-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-fire-extinguisher-vadodara" />;
}
