import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Power of attorney in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional power of attorney services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/power-of-attorney-vadodara" },
  openGraph: {
    title: "Power of attorney in Vadodara | VadodaraExperts",
    description: "Professional power of attorney services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/power-of-attorney-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-of-attorney-vadodara" />;
}
