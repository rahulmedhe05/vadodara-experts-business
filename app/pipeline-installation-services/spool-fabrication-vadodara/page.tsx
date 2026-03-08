import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "spool fabrication in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional spool fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/spool-fabrication-vadodara" },
  openGraph: {
    title: "spool fabrication in Vadodara | VadodaraExperts",
    description: "Professional spool fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/spool-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spool-fabrication-vadodara" />;
}
