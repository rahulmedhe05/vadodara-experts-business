import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST bond submission in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst bond submission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-bond-submission-vadodara" },
  openGraph: {
    title: "GST bond submission in Vadodara | VadodaraExperts",
    description: "Professional gst bond submission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-bond-submission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-bond-submission-vadodara" />;
}
