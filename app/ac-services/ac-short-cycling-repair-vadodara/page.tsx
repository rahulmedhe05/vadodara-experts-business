import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "AC short cycling repair in Vadodara | AC Services | VadodaraExperts",
  description: "Professional ac short cycling repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/ac-short-cycling-repair-vadodara" },
  openGraph: {
    title: "AC short cycling repair in Vadodara | VadodaraExperts",
    description: "Professional ac short cycling repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/ac-short-cycling-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-short-cycling-repair-vadodara" />;
}
