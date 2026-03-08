import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Sub registrar office in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional sub registrar office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/sub-registrar-office-vadodara" },
  openGraph: {
    title: "Sub registrar office in Vadodara | VadodaraExperts",
    description: "Professional sub registrar office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/sub-registrar-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sub-registrar-office-vadodara" />;
}
