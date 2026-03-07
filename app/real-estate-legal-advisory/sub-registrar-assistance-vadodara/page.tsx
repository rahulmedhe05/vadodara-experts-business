import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "sub registrar assistance in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional sub registrar assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/sub-registrar-assistance-vadodara" },
  openGraph: {
    title: "sub registrar assistance in Vadodara | VadodaraExperts",
    description: "Professional sub registrar assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/sub-registrar-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-registrar-assistance-vadodara" />;
}
