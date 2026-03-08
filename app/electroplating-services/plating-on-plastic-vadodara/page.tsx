import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating on plastic in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating on plastic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-on-plastic-vadodara" },
  openGraph: {
    title: "plating on plastic in Vadodara | VadodaraExperts",
    description: "Professional plating on plastic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-on-plastic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-on-plastic-vadodara" />;
}
