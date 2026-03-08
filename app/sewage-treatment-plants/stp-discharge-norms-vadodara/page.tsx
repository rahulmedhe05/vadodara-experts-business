import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "STP discharge norms in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional stp discharge norms services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/stp-discharge-norms-vadodara" },
  openGraph: {
    title: "STP discharge norms in Vadodara | VadodaraExperts",
    description: "Professional stp discharge norms services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/stp-discharge-norms-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stp-discharge-norms-vadodara" />;
}
