import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Landscape architecture firm in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional landscape architecture firm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/landscape-architecture-firm-vadodara" },
  openGraph: {
    title: "Landscape architecture firm in Vadodara | VadodaraExperts",
    description: "Professional landscape architecture firm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/landscape-architecture-firm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="landscape-architecture-firm-vadodara" />;
}
