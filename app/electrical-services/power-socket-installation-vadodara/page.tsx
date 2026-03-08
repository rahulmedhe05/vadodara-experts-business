import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Power socket installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional power socket installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/power-socket-installation-vadodara" },
  openGraph: {
    title: "Power socket installation in Vadodara | VadodaraExperts",
    description: "Professional power socket installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/power-socket-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-socket-installation-vadodara" />;
}
