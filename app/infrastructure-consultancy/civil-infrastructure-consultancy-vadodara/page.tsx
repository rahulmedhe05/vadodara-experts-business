import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "civil infrastructure consultancy in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional civil infrastructure consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/civil-infrastructure-consultancy-vadodara" },
  openGraph: {
    title: "civil infrastructure consultancy in Vadodara | VadodaraExperts",
    description: "Professional civil infrastructure consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/civil-infrastructure-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="civil-infrastructure-consultancy-vadodara" />;
}
