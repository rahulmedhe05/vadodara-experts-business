import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Switchboard installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional switchboard installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/switchboard-installation-vadodara" },
  openGraph: {
    title: "Switchboard installation in Vadodara | VadodaraExperts",
    description: "Professional switchboard installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/switchboard-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="switchboard-installation-vadodara" />;
}
