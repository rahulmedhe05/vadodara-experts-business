import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "SS pipeline installation in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional ss pipeline installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/ss-pipeline-installation-vadodara" },
  openGraph: {
    title: "SS pipeline installation in Vadodara | VadodaraExperts",
    description: "Professional ss pipeline installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/ss-pipeline-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ss-pipeline-installation-vadodara" />;
}
