import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Out of gauge cargo in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional out of gauge cargo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/out-of-gauge-cargo-vadodara" },
  openGraph: {
    title: "Out of gauge cargo in Vadodara | VadodaraExperts",
    description: "Professional out of gauge cargo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/out-of-gauge-cargo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="out-of-gauge-cargo-vadodara" />;
}
