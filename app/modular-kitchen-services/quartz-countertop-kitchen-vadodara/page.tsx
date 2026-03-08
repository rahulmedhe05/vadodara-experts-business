import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Quartz countertop kitchen in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional quartz countertop kitchen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/quartz-countertop-kitchen-vadodara" },
  openGraph: {
    title: "Quartz countertop kitchen in Vadodara | VadodaraExperts",
    description: "Professional quartz countertop kitchen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/quartz-countertop-kitchen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quartz-countertop-kitchen-vadodara" />;
}
