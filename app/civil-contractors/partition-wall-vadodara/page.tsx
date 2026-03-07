import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Partition wall in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional partition wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/partition-wall-vadodara" },
  openGraph: {
    title: "Partition wall in Vadodara | VadodaraExperts",
    description: "Professional partition wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/partition-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="partition-wall-vadodara" />;
}
