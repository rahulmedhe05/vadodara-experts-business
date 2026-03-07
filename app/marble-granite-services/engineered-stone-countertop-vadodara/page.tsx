import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Engineered stone countertop in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional engineered stone countertop services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/engineered-stone-countertop-vadodara" },
  openGraph: {
    title: "Engineered stone countertop in Vadodara | VadodaraExperts",
    description: "Professional engineered stone countertop services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/engineered-stone-countertop-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="engineered-stone-countertop-vadodara" />;
}
