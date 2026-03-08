import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Maternity photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional maternity photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/maternity-photography-vadodara" },
  openGraph: {
    title: "Maternity photography in Vadodara | VadodaraExperts",
    description: "Professional maternity photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/maternity-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="maternity-photography-vadodara" />;
}
