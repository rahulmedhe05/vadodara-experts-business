import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "legal heir certificate in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional legal heir certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/legal-heir-certificate-vadodara" },
  openGraph: {
    title: "legal heir certificate in Vadodara | VadodaraExperts",
    description: "Professional legal heir certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/legal-heir-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-heir-certificate-vadodara" />;
}
