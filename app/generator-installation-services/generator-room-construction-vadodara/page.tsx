import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator room construction in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator room construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-room-construction-vadodara" },
  openGraph: {
    title: "Generator room construction in Vadodara | VadodaraExperts",
    description: "Professional generator room construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-room-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-room-construction-vadodara" />;
}
