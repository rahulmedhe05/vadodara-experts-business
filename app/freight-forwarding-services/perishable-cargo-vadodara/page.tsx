import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Perishable cargo in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional perishable cargo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/perishable-cargo-vadodara" },
  openGraph: {
    title: "Perishable cargo in Vadodara | VadodaraExperts",
    description: "Professional perishable cargo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/perishable-cargo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="perishable-cargo-vadodara" />;
}
