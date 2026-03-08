import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Joint sealing treatment in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional joint sealing treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/joint-sealing-treatment-vadodara" },
  openGraph: {
    title: "Joint sealing treatment in Vadodara | VadodaraExperts",
    description: "Professional joint sealing treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/joint-sealing-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joint-sealing-treatment-vadodara" />;
}
