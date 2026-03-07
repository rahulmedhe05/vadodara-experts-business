import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Artificial grass installation in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional artificial grass installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/artificial-grass-installation-vadodara" },
  openGraph: {
    title: "Artificial grass installation in Vadodara | VadodaraExperts",
    description: "Professional artificial grass installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/artificial-grass-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="artificial-grass-installation-vadodara" />;
}
