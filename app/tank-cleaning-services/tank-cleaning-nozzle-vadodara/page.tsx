import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "tank cleaning nozzle in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional tank cleaning nozzle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/tank-cleaning-nozzle-vadodara" },
  openGraph: {
    title: "tank cleaning nozzle in Vadodara | VadodaraExperts",
    description: "Professional tank cleaning nozzle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/tank-cleaning-nozzle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tank-cleaning-nozzle-vadodara" />;
}
