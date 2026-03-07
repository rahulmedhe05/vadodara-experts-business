import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Solid surface countertop in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional solid surface countertop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/solid-surface-countertop-vadodara" },
  openGraph: {
    title: "Solid surface countertop in Vadodara | VadodaraExperts",
    description: "Professional solid surface countertop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/solid-surface-countertop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="solid-surface-countertop-vadodara" />;
}
