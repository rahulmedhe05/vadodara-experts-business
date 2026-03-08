import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Resort landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional resort landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/resort-landscape-vadodara" },
  openGraph: {
    title: "Resort landscape in Vadodara | VadodaraExperts",
    description: "Professional resort landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/resort-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resort-landscape-vadodara" />;
}
