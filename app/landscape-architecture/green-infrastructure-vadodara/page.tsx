import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Green infrastructure in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional green infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/green-infrastructure-vadodara" },
  openGraph: {
    title: "Green infrastructure in Vadodara | VadodaraExperts",
    description: "Professional green infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/green-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-infrastructure-vadodara" />;
}
