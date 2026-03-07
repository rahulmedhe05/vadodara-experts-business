import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator overheating problem in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional generator overheating problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/generator-overheating-problem-vadodara" },
  openGraph: {
    title: "Generator overheating problem in Vadodara | VadodaraExperts",
    description: "Professional generator overheating problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/generator-overheating-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="generator-overheating-problem-vadodara" />;
}
