import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Pool chemical balancing in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional pool chemical balancing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/pool-chemical-balancing-vadodara" },
  openGraph: {
    title: "Pool chemical balancing in Vadodara | VadodaraExperts",
    description: "Professional pool chemical balancing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/pool-chemical-balancing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pool-chemical-balancing-vadodara" />;
}
