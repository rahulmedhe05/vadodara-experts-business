import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "tee fitting in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional tee fitting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/tee-fitting-vadodara" },
  openGraph: {
    title: "tee fitting in Vadodara | VadodaraExperts",
    description: "Professional tee fitting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/tee-fitting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tee-fitting-vadodara" />;
}
