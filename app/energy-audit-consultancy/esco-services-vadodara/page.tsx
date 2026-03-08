import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "ESCO services in Vadodara | Energy Audit Consultancy | VadodaraExperts",
  description: "Professional esco services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy/esco-services-vadodara" },
  openGraph: {
    title: "ESCO services in Vadodara | VadodaraExperts",
    description: "Professional esco services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy/esco-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="esco-services-vadodara" />;
}
