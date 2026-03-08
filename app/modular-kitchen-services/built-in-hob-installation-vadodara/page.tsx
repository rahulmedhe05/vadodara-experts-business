import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Built in hob installation in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional built in hob installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/built-in-hob-installation-vadodara" },
  openGraph: {
    title: "Built in hob installation in Vadodara | VadodaraExperts",
    description: "Professional built in hob installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/built-in-hob-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="built-in-hob-installation-vadodara" />;
}
