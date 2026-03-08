import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP aeration tank in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp aeration tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-aeration-tank-vadodara" },
  openGraph: {
    title: "STP aeration tank in Vadodara | VadodaraExperts",
    description: "Professional stp aeration tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-aeration-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-aeration-tank-vadodara" />;
}
