import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Old kitchen makeover in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional old kitchen makeover services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/old-kitchen-makeover-vadodara" },
  openGraph: {
    title: "Old kitchen makeover in Vadodara | VadodaraExperts",
    description: "Professional old kitchen makeover services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/old-kitchen-makeover-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-kitchen-makeover-vadodara" />;
}
