import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Place of supply determination in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional place of supply determination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/place-of-supply-determination-vadodara" },
  openGraph: {
    title: "Place of supply determination in Vadodara | VadodaraExperts",
    description: "Professional place of supply determination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/place-of-supply-determination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="place-of-supply-determination-vadodara" />;
}
