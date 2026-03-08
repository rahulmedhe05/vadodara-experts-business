import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "pipe fitting installation in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional pipe fitting installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/pipe-fitting-installation-vadodara" },
  openGraph: {
    title: "pipe fitting installation in Vadodara | VadodaraExperts",
    description: "Professional pipe fitting installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/pipe-fitting-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-fitting-installation-vadodara" />;
}
