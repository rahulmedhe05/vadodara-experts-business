import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST on goods transport in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst on goods transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-on-goods-transport-vadodara" },
  openGraph: {
    title: "GST on goods transport in Vadodara | VadodaraExperts",
    description: "Professional gst on goods transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-on-goods-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-on-goods-transport-vadodara" />;
}
