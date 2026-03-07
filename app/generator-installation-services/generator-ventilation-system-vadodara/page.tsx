import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator ventilation system in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator ventilation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-ventilation-system-vadodara" },
  openGraph: {
    title: "Generator ventilation system in Vadodara | VadodaraExperts",
    description: "Professional generator ventilation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-ventilation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-ventilation-system-vadodara" />;
}
