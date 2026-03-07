import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Drought resistant landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional drought resistant landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/drought-resistant-landscape-vadodara" },
  openGraph: {
    title: "Drought resistant landscape in Vadodara | VadodaraExperts",
    description: "Professional drought resistant landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/drought-resistant-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drought-resistant-landscape-vadodara" />;
}
