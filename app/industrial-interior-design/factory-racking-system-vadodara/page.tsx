import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory racking system in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory racking system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-racking-system-vadodara" },
  openGraph: {
    title: "factory racking system in Vadodara | VadodaraExperts",
    description: "Professional factory racking system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-racking-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-racking-system-vadodara" />;
}
