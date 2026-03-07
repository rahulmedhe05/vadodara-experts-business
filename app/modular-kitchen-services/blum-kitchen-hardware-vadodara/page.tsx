import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Blum kitchen hardware in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional blum kitchen hardware services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/blum-kitchen-hardware-vadodara" },
  openGraph: {
    title: "Blum kitchen hardware in Vadodara | VadodaraExperts",
    description: "Professional blum kitchen hardware services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/blum-kitchen-hardware-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blum-kitchen-hardware-vadodara" />;
}
