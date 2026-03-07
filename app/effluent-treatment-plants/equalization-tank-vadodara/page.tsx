import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "equalization tank in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional equalization tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/equalization-tank-vadodara" },
  openGraph: {
    title: "equalization tank in Vadodara | VadodaraExperts",
    description: "Professional equalization tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/equalization-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="equalization-tank-vadodara" />;
}
