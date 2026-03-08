import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electroplating-services")!;

export const metadata: Metadata = {
  title: "plating thickness testing in Vadodara | Electroplating Services | VadodaraExperts",
  description: "Professional plating thickness testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electroplating-services/plating-thickness-testing-vadodara" },
  openGraph: {
    title: "plating thickness testing in Vadodara | VadodaraExperts",
    description: "Professional plating thickness testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electroplating-services/plating-thickness-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plating-thickness-testing-vadodara" />;
}
