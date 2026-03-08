import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Stop cock replacement in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional stop cock replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/stop-cock-replacement-vadodara" },
  openGraph: {
    title: "Stop cock replacement in Vadodara | VadodaraExperts",
    description: "Professional stop cock replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/stop-cock-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stop-cock-replacement-vadodara" />;
}
