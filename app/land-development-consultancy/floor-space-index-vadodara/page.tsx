import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "floor space index in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional floor space index services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/floor-space-index-vadodara" },
  openGraph: {
    title: "floor space index in Vadodara | VadodaraExperts",
    description: "Professional floor space index services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/floor-space-index-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-space-index-vadodara" />;
}
