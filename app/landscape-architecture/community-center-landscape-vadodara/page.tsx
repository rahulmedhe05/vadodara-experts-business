import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Community center landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional community center landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/community-center-landscape-vadodara" },
  openGraph: {
    title: "Community center landscape in Vadodara | VadodaraExperts",
    description: "Professional community center landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/community-center-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="community-center-landscape-vadodara" />;
}
