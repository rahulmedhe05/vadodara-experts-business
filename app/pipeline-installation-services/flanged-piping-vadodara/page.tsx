import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "flanged piping in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional flanged piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/flanged-piping-vadodara" },
  openGraph: {
    title: "flanged piping in Vadodara | VadodaraExperts",
    description: "Professional flanged piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/flanged-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flanged-piping-vadodara" />;
}
