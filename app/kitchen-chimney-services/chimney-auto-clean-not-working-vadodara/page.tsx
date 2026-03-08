import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney auto clean not working in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney auto clean not working services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-auto-clean-not-working-vadodara" },
  openGraph: {
    title: "Chimney auto clean not working in Vadodara | VadodaraExperts",
    description: "Professional chimney auto clean not working services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-auto-clean-not-working-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-auto-clean-not-working-vadodara" />;
}
