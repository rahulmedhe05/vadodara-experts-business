import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Pool skimmer installation in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional pool skimmer installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/pool-skimmer-installation-vadodara" },
  openGraph: {
    title: "Pool skimmer installation in Vadodara | VadodaraExperts",
    description: "Professional pool skimmer installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/pool-skimmer-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pool-skimmer-installation-vadodara" />;
}
