import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST assessment order in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst assessment order services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-assessment-order-vadodara" },
  openGraph: {
    title: "GST assessment order in Vadodara | VadodaraExperts",
    description: "Professional gst assessment order services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-assessment-order-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-assessment-order-vadodara" />;
}
