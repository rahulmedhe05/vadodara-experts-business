import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Built in hob repair in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional built in hob repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/built-in-hob-repair-vadodara" },
  openGraph: {
    title: "Built in hob repair in Vadodara | VadodaraExperts",
    description: "Professional built in hob repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/built-in-hob-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="built-in-hob-repair-vadodara" />;
}
