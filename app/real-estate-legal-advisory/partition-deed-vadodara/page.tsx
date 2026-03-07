import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "partition deed in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional partition deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/partition-deed-vadodara" },
  openGraph: {
    title: "partition deed in Vadodara | VadodaraExperts",
    description: "Professional partition deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/partition-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="partition-deed-vadodara" />;
}
