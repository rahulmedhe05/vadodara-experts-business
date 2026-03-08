import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Ola Electric charger in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ola electric charger services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ola-electric-charger-vadodara" },
  openGraph: {
    title: "Ola Electric charger in Vadodara | VadodaraExperts",
    description: "Professional ola electric charger services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ola-electric-charger-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ola-electric-charger-vadodara" />;
}
