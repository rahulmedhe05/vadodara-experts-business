import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pipeline-installation-services")!;

export const metadata: Metadata = {
  title: "MIG welding pipe in Vadodara | Pipeline Installation Services | VadodaraExperts",
  description: "Professional mig welding pipe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pipeline-installation-services/mig-welding-pipe-vadodara" },
  openGraph: {
    title: "MIG welding pipe in Vadodara | VadodaraExperts",
    description: "Professional mig welding pipe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pipeline-installation-services/mig-welding-pipe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mig-welding-pipe-vadodara" />;
}
