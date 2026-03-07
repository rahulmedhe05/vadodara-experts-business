import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Power backup system in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional power backup system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/power-backup-system-vadodara" },
  openGraph: {
    title: "Power backup system in Vadodara | VadodaraExperts",
    description: "Professional power backup system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/power-backup-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-backup-system-vadodara" />;
}
