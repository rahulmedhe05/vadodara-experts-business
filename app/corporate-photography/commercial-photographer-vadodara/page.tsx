import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Commercial photographer in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional commercial photographer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/commercial-photographer-vadodara" },
  openGraph: {
    title: "Commercial photographer in Vadodara | VadodaraExperts",
    description: "Professional commercial photographer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/commercial-photographer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-photographer-vadodara" />;
}
