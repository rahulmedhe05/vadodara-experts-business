import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Paver pathway installation in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional paver pathway installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/paver-pathway-installation-vadodara" },
  openGraph: {
    title: "Paver pathway installation in Vadodara | VadodaraExperts",
    description: "Professional paver pathway installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/paver-pathway-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="paver-pathway-installation-vadodara" />;
}
