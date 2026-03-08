import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Gas pipeline installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional gas pipeline installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/gas-pipeline-installation-vadodara" },
  openGraph: {
    title: "Gas pipeline installation in Vadodara | VadodaraExperts",
    description: "Professional gas pipeline installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/gas-pipeline-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gas-pipeline-installation-vadodara" />;
}
