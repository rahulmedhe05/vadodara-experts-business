import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "200 KLD STP in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional 200 kld stp services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/200-kld-stp-vadodara" },
  openGraph: {
    title: "200 KLD STP in Vadodara | VadodaraExperts",
    description: "Professional 200 kld stp services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/200-kld-stp-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="200-kld-stp-vadodara" />;
}
