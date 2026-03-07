import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Kitchen countertop in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional kitchen countertop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-countertop-vadodara" },
  openGraph: {
    title: "Kitchen countertop in Vadodara | VadodaraExperts",
    description: "Professional kitchen countertop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-countertop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-countertop-vadodara" />;
}
