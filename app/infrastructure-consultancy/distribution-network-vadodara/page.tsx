import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "distribution network in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional distribution network services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/distribution-network-vadodara" },
  openGraph: {
    title: "distribution network in Vadodara | VadodaraExperts",
    description: "Professional distribution network services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/distribution-network-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distribution-network-vadodara" />;
}
