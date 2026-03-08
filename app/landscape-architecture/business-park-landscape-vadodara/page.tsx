import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Business park landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional business park landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/business-park-landscape-vadodara" },
  openGraph: {
    title: "Business park landscape in Vadodara | VadodaraExperts",
    description: "Professional business park landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/business-park-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-park-landscape-vadodara" />;
}
