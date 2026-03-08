import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "production floor design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional production floor design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/production-floor-design-vadodara" },
  openGraph: {
    title: "production floor design in Vadodara | VadodaraExperts",
    description: "Professional production floor design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/production-floor-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="production-floor-design-vadodara" />;
}
