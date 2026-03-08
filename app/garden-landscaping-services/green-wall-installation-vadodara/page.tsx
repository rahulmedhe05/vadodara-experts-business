import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Green wall installation in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional green wall installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/green-wall-installation-vadodara" },
  openGraph: {
    title: "Green wall installation in Vadodara | VadodaraExperts",
    description: "Professional green wall installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/green-wall-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-wall-installation-vadodara" />;
}
