import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Stainless steel modular kitchen in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional stainless steel modular kitchen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/stainless-steel-modular-kitchen-vadodara" },
  openGraph: {
    title: "Stainless steel modular kitchen in Vadodara | VadodaraExperts",
    description: "Professional stainless steel modular kitchen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/stainless-steel-modular-kitchen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stainless-steel-modular-kitchen-vadodara" />;
}
