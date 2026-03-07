import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Content creation photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional content creation photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/content-creation-photography-vadodara" },
  openGraph: {
    title: "Content creation photography in Vadodara | VadodaraExperts",
    description: "Professional content creation photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/content-creation-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="content-creation-photography-vadodara" />;
}
