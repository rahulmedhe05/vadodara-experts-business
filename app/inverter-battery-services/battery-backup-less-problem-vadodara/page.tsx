import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Battery backup less problem in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional battery backup less problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/battery-backup-less-problem-vadodara" },
  openGraph: {
    title: "Battery backup less problem in Vadodara | VadodaraExperts",
    description: "Professional battery backup less problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/battery-backup-less-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="battery-backup-less-problem-vadodara" />;
}
