import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("solar-panel-installation")!;

export const metadata: Metadata = {
  title: "Solar with battery backup in Vadodara | Solar Panel Installation | VadodaraExperts",
  description: "Professional solar with battery backup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/solar-panel-installation/solar-with-battery-backup-vadodara" },
  openGraph: {
    title: "Solar with battery backup in Vadodara | VadodaraExperts",
    description: "Professional solar with battery backup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/solar-panel-installation/solar-with-battery-backup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solar-with-battery-backup-vadodara" />;
}
