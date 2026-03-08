import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating on steel in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating on steel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-on-steel-vadodara" },
  openGraph: {
    title: "plating on steel in Vadodara | VadodaraExperts",
    description: "Professional plating on steel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-on-steel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-on-steel-vadodara" />;
}
