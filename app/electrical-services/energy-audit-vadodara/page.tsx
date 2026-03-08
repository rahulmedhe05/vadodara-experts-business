import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Energy audit in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional energy audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/energy-audit-vadodara" },
  openGraph: {
    title: "Energy audit in Vadodara | VadodaraExperts",
    description: "Professional energy audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/energy-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-audit-vadodara" />;
}
