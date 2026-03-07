import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "steam pipeline installation in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional steam pipeline installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/steam-pipeline-installation-vadodara" },
  openGraph: {
    title: "steam pipeline installation in Vadodara | VadodaraExperts",
    description: "Professional steam pipeline installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/steam-pipeline-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-pipeline-installation-vadodara" />;
}
