import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating on aluminium in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating on aluminium services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-on-aluminium-vadodara" },
  openGraph: {
    title: "plating on aluminium in Vadodara | VadodaraExperts",
    description: "Professional plating on aluminium services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-on-aluminium-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-on-aluminium-vadodara" />;
}
