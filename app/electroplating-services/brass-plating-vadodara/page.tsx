import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "brass plating in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional brass plating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/brass-plating-vadodara" },
  openGraph: {
    title: "brass plating in Vadodara | VadodaraExperts",
    description: "Professional brass plating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/brass-plating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="brass-plating-vadodara" />;
}
