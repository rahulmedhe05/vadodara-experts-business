import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "tank cleaning machine in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional tank cleaning machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/tank-cleaning-machine-vadodara" },
  openGraph: {
    title: "tank cleaning machine in Vadodara | VadodaraExperts",
    description: "Professional tank cleaning machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/tank-cleaning-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tank-cleaning-machine-vadodara" />;
}
