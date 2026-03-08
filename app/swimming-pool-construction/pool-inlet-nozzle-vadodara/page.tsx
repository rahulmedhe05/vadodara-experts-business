import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Pool inlet nozzle in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional pool inlet nozzle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/pool-inlet-nozzle-vadodara" },
  openGraph: {
    title: "Pool inlet nozzle in Vadodara | VadodaraExperts",
    description: "Professional pool inlet nozzle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/pool-inlet-nozzle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pool-inlet-nozzle-vadodara" />;
}
