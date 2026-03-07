import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Home generator installation in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional home generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/home-generator-installation-vadodara" },
  openGraph: {
    title: "Home generator installation in Vadodara | VadodaraExperts",
    description: "Professional home generator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/home-generator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-generator-installation-vadodara" />;
}
