import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Model portfolio photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional model portfolio photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/model-portfolio-photography-vadodara" },
  openGraph: {
    title: "Model portfolio photography in Vadodara | VadodaraExperts",
    description: "Professional model portfolio photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/model-portfolio-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="model-portfolio-photography-vadodara" />;
}
