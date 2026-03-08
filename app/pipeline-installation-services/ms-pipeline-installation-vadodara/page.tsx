import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "MS pipeline installation in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional ms pipeline installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/ms-pipeline-installation-vadodara" },
  openGraph: {
    title: "MS pipeline installation in Vadodara | VadodaraExperts",
    description: "Professional ms pipeline installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/ms-pipeline-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ms-pipeline-installation-vadodara" />;
}
