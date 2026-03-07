import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Pick and pack in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional pick and pack services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/pick-and-pack-vadodara" },
  openGraph: {
    title: "Pick and pack in Vadodara | VadodaraExperts",
    description: "Professional pick and pack services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/pick-and-pack-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pick-and-pack-vadodara" />;
}
