import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Structural engineering firm in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional structural engineering firm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/structural-engineering-firm-vadodara" },
  openGraph: {
    title: "Structural engineering firm in Vadodara | VadodaraExperts",
    description: "Professional structural engineering firm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/structural-engineering-firm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-engineering-firm-vadodara" />;
}
