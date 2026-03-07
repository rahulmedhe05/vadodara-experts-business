import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST registration cancellation in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst registration cancellation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-registration-cancellation-vadodara" },
  openGraph: {
    title: "GST registration cancellation in Vadodara | VadodaraExperts",
    description: "Professional gst registration cancellation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-registration-cancellation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-registration-cancellation-vadodara" />;
}
