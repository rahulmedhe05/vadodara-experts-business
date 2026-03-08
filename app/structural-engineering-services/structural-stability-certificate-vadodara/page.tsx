import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Structural stability certificate in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional structural stability certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/structural-stability-certificate-vadodara" },
  openGraph: {
    title: "Structural stability certificate in Vadodara | VadodaraExperts",
    description: "Professional structural stability certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/structural-stability-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-stability-certificate-vadodara" />;
}
