import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "beauty parlour interior in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional beauty parlour interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/beauty-parlour-interior-vadodara" },
  openGraph: {
    title: "beauty parlour interior in Vadodara | VadodaraExperts",
    description: "Professional beauty parlour interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/beauty-parlour-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="beauty-parlour-interior-vadodara" />;
}
