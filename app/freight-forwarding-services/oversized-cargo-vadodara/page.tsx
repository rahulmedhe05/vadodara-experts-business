import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Oversized cargo in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional oversized cargo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/oversized-cargo-vadodara" },
  openGraph: {
    title: "Oversized cargo in Vadodara | VadodaraExperts",
    description: "Professional oversized cargo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/oversized-cargo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="oversized-cargo-vadodara" />;
}
