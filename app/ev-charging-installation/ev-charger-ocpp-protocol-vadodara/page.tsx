import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV charger OCPP protocol in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ev charger ocpp protocol services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ev-charger-ocpp-protocol-vadodara" },
  openGraph: {
    title: "EV charger OCPP protocol in Vadodara | VadodaraExperts",
    description: "Professional ev charger ocpp protocol services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ev-charger-ocpp-protocol-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charger-ocpp-protocol-vadodara" />;
}
