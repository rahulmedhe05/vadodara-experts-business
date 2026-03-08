import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "CPVC pipe fitting in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional cpvc pipe fitting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/cpvc-pipe-fitting-vadodara" },
  openGraph: {
    title: "CPVC pipe fitting in Vadodara | VadodaraExperts",
    description: "Professional cpvc pipe fitting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/cpvc-pipe-fitting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cpvc-pipe-fitting-vadodara" />;
}
