import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "domestic sewage treatment in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional domestic sewage treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/domestic-sewage-treatment-vadodara" },
  openGraph: {
    title: "domestic sewage treatment in Vadodara | VadodaraExperts",
    description: "Professional domestic sewage treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/domestic-sewage-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="domestic-sewage-treatment-vadodara" />;
}
