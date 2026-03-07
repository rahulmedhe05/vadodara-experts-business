import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "infrastructure maintenance consultancy in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional infrastructure maintenance consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-maintenance-consultancy-vadodara" },
  openGraph: {
    title: "infrastructure maintenance consultancy in Vadodara | VadodaraExperts",
    description: "Professional infrastructure maintenance consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/infrastructure-maintenance-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infrastructure-maintenance-consultancy-vadodara" />;
}
