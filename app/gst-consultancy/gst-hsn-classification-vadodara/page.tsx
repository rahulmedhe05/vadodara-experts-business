import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST HSN classification in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst hsn classification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-hsn-classification-vadodara" },
  openGraph: {
    title: "GST HSN classification in Vadodara | VadodaraExperts",
    description: "Professional gst hsn classification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-hsn-classification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-hsn-classification-vadodara" />;
}
