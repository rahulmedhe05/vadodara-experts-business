import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator dealer in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-dealer-vadodara" },
  openGraph: {
    title: "Generator dealer in Vadodara | VadodaraExperts",
    description: "Professional generator dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-dealer-vadodara" />;
}
