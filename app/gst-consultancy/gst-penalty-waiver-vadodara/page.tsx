import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST penalty waiver in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst penalty waiver services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-penalty-waiver-vadodara" },
  openGraph: {
    title: "GST penalty waiver in Vadodara | VadodaraExperts",
    description: "Professional gst penalty waiver services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-penalty-waiver-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-penalty-waiver-vadodara" />;
}
