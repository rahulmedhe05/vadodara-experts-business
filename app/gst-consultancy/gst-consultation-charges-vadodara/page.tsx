import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST consultation charges in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst consultation charges services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-consultation-charges-vadodara" },
  openGraph: {
    title: "GST consultation charges in Vadodara | VadodaraExperts",
    description: "Professional gst consultation charges services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-consultation-charges-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-consultation-charges-vadodara" />;
}
