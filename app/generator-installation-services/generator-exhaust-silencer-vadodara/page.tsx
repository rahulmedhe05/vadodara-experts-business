import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator exhaust silencer in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator exhaust silencer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-exhaust-silencer-vadodara" },
  openGraph: {
    title: "Generator exhaust silencer in Vadodara | VadodaraExperts",
    description: "Professional generator exhaust silencer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-exhaust-silencer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-exhaust-silencer-vadodara" />;
}
