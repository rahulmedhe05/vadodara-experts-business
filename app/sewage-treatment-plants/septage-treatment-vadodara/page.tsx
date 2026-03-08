import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "septage treatment in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional septage treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/septage-treatment-vadodara" },
  openGraph: {
    title: "septage treatment in Vadodara | VadodaraExperts",
    description: "Professional septage treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/septage-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="septage-treatment-vadodara" />;
}
