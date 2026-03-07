import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Loading and unloading in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional loading and unloading services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/loading-and-unloading-vadodara" },
  openGraph: {
    title: "Loading and unloading in Vadodara | VadodaraExperts",
    description: "Professional loading and unloading services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/loading-and-unloading-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="loading-and-unloading-vadodara" />;
}
