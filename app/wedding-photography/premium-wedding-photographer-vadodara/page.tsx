import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Premium wedding photographer in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional premium wedding photographer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/premium-wedding-photographer-vadodara" },
  openGraph: {
    title: "Premium wedding photographer in Vadodara | VadodaraExperts",
    description: "Professional premium wedding photographer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/premium-wedding-photographer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="premium-wedding-photographer-vadodara" />;
}
