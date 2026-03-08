import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Old generator buyer in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional old generator buyer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/old-generator-buyer-vadodara" },
  openGraph: {
    title: "Old generator buyer in Vadodara | VadodaraExperts",
    description: "Professional old generator buyer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/old-generator-buyer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-generator-buyer-vadodara" />;
}
