import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Commercial generator installation in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional commercial generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/commercial-generator-installation-vadodara" },
  openGraph: {
    title: "Commercial generator installation in Vadodara | VadodaraExperts",
    description: "Professional commercial generator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/commercial-generator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-generator-installation-vadodara" />;
}
