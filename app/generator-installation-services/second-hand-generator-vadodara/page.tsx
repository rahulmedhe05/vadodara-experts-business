import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Second hand generator in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional second hand generator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/second-hand-generator-vadodara" },
  openGraph: {
    title: "Second hand generator in Vadodara | VadodaraExperts",
    description: "Professional second hand generator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/second-hand-generator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-hand-generator-vadodara" />;
}
