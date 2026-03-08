import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Single phase generator in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional single phase generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/single-phase-generator-vadodara" },
  openGraph: {
    title: "Single phase generator in Vadodara | VadodaraExperts",
    description: "Professional single phase generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/single-phase-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-phase-generator-vadodara" />;
}
