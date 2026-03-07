import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Heavy lift cargo in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional heavy lift cargo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/heavy-lift-cargo-vadodara" },
  openGraph: {
    title: "Heavy lift cargo in Vadodara | VadodaraExperts",
    description: "Professional heavy lift cargo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/heavy-lift-cargo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-lift-cargo-vadodara" />;
}
