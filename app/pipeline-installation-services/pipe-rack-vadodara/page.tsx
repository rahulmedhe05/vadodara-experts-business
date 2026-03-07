import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "pipe rack in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional pipe rack services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/pipe-rack-vadodara" },
  openGraph: {
    title: "pipe rack in Vadodara | VadodaraExperts",
    description: "Professional pipe rack services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/pipe-rack-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-rack-vadodara" />;
}
