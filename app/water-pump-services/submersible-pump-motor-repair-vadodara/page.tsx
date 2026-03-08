import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Submersible pump motor repair in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional submersible pump motor repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/submersible-pump-motor-repair-vadodara" },
  openGraph: {
    title: "Submersible pump motor repair in Vadodara | VadodaraExperts",
    description: "Professional submersible pump motor repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/submersible-pump-motor-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="submersible-pump-motor-repair-vadodara" />;
}
