import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST rate classification in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst rate classification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-rate-classification-vadodara" },
  openGraph: {
    title: "GST rate classification in Vadodara | VadodaraExperts",
    description: "Professional gst rate classification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-rate-classification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-rate-classification-vadodara" />;
}
