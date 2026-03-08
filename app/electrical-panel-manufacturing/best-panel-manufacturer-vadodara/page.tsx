import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-panel-manufacturing")!;

export const metadata: Metadata = {
  title: "best panel manufacturer in Vadodara | Electrical Panel Manufacturing | VadodaraExperts",
  description: "Professional best panel manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-panel-manufacturing/best-panel-manufacturer-vadodara" },
  openGraph: {
    title: "best panel manufacturer in Vadodara | VadodaraExperts",
    description: "Professional best panel manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-panel-manufacturing/best-panel-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-panel-manufacturer-vadodara" />;
}
