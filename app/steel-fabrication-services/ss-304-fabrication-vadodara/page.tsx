import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "SS 304 fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional ss 304 fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/ss-304-fabrication-vadodara" },
  openGraph: {
    title: "SS 304 fabrication in Vadodara | VadodaraExperts",
    description: "Professional ss 304 fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/ss-304-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ss-304-fabrication-vadodara" />;
}
