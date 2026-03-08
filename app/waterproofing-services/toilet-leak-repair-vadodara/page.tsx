import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Toilet leak repair in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional toilet leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/toilet-leak-repair-vadodara" },
  openGraph: {
    title: "Toilet leak repair in Vadodara | VadodaraExperts",
    description: "Professional toilet leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/toilet-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="toilet-leak-repair-vadodara" />;
}
