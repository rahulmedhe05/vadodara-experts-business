import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory canteen design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory canteen design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-canteen-design-vadodara" },
  openGraph: {
    title: "factory canteen design in Vadodara | VadodaraExperts",
    description: "Professional factory canteen design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-canteen-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-canteen-design-vadodara" />;
}
