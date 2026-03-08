import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory powder coating booth in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory powder coating booth services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-powder-coating-booth-vadodara" },
  openGraph: {
    title: "factory powder coating booth in Vadodara | VadodaraExperts",
    description: "Professional factory powder coating booth services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-powder-coating-booth-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-powder-coating-booth-vadodara" />;
}
