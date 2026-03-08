import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Hob gas leak repair in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional hob gas leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/hob-gas-leak-repair-vadodara" },
  openGraph: {
    title: "Hob gas leak repair in Vadodara | VadodaraExperts",
    description: "Professional hob gas leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/hob-gas-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hob-gas-leak-repair-vadodara" />;
}
