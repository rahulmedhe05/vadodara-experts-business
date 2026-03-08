import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Steel portal frame in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional steel portal frame services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/steel-portal-frame-vadodara" },
  openGraph: {
    title: "Steel portal frame in Vadodara | VadodaraExperts",
    description: "Professional steel portal frame services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/steel-portal-frame-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-portal-frame-vadodara" />;
}
