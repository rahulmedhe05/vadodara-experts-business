import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Legal heir certificate in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional legal heir certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/legal-heir-certificate-vadodara" },
  openGraph: {
    title: "Legal heir certificate in Vadodara | VadodaraExperts",
    description: "Professional legal heir certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/legal-heir-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-heir-certificate-vadodara" />;
}
