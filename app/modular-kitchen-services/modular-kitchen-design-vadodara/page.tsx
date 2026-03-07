import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Modular kitchen design in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional modular kitchen design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-design-vadodara" },
  openGraph: {
    title: "Modular kitchen design in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-design-vadodara" />;
}
