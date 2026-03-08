import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "hot water system in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional hot water system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/hot-water-system-vadodara" },
  openGraph: {
    title: "hot water system in Vadodara | VadodaraExperts",
    description: "Professional hot water system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/hot-water-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-water-system-vadodara" />;
}
