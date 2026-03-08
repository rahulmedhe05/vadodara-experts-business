import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Shipping agent in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional shipping agent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/shipping-agent-vadodara" },
  openGraph: {
    title: "Shipping agent in Vadodara | VadodaraExperts",
    description: "Professional shipping agent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/shipping-agent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shipping-agent-vadodara" />;
}
