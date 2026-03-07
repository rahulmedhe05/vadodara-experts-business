import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "bronze plating in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional bronze plating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/bronze-plating-vadodara" },
  openGraph: {
    title: "bronze plating in Vadodara | VadodaraExperts",
    description: "Professional bronze plating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/bronze-plating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bronze-plating-vadodara" />;
}
