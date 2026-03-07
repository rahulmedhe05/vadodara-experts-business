import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Built in coffee machine in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional built in coffee machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/built-in-coffee-machine-vadodara" },
  openGraph: {
    title: "Built in coffee machine in Vadodara | VadodaraExperts",
    description: "Professional built in coffee machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/built-in-coffee-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="built-in-coffee-machine-vadodara" />;
}
