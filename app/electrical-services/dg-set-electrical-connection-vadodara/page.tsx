import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "DG set electrical connection in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional dg set electrical connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/dg-set-electrical-connection-vadodara" },
  openGraph: {
    title: "DG set electrical connection in Vadodara | VadodaraExperts",
    description: "Professional dg set electrical connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/dg-set-electrical-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-set-electrical-connection-vadodara" />;
}
