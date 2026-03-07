import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Gated community landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional gated community landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/gated-community-landscape-vadodara" },
  openGraph: {
    title: "Gated community landscape in Vadodara | VadodaraExperts",
    description: "Professional gated community landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/gated-community-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gated-community-landscape-vadodara" />;
}
