import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory safety signage in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory safety signage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-safety-signage-vadodara" },
  openGraph: {
    title: "factory safety signage in Vadodara | VadodaraExperts",
    description: "Professional factory safety signage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-safety-signage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-safety-signage-vadodara" />;
}
