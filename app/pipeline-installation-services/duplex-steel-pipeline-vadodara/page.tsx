import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "duplex steel pipeline in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional duplex steel pipeline services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/duplex-steel-pipeline-vadodara" },
  openGraph: {
    title: "duplex steel pipeline in Vadodara | VadodaraExperts",
    description: "Professional duplex steel pipeline services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/duplex-steel-pipeline-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duplex-steel-pipeline-vadodara" />;
}
