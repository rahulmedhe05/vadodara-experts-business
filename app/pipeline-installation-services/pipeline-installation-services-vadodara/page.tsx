import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "pipeline installation services in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional pipeline installation services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/pipeline-installation-services-vadodara" },
  openGraph: {
    title: "pipeline installation services in Vadodara | VadodaraExperts",
    description: "Professional pipeline installation services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/pipeline-installation-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipeline-installation-services-vadodara" />;
}
