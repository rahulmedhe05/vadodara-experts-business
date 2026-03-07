import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "off circuit tap switch in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional off circuit tap switch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/off-circuit-tap-switch-vadodara" },
  openGraph: {
    title: "off circuit tap switch in Vadodara | VadodaraExperts",
    description: "Professional off circuit tap switch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/off-circuit-tap-switch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="off-circuit-tap-switch-vadodara" />;
}
