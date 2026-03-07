import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Instant geyser repair in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional instant geyser repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/instant-geyser-repair-vadodara" },
  openGraph: {
    title: "Instant geyser repair in Vadodara | VadodaraExperts",
    description: "Professional instant geyser repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/instant-geyser-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="instant-geyser-repair-vadodara" />;
}
