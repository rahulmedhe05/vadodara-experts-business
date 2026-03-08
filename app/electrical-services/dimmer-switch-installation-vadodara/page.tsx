import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Dimmer switch installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional dimmer switch installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/dimmer-switch-installation-vadodara" },
  openGraph: {
    title: "Dimmer switch installation in Vadodara | VadodaraExperts",
    description: "Professional dimmer switch installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/dimmer-switch-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dimmer-switch-installation-vadodara" />;
}
