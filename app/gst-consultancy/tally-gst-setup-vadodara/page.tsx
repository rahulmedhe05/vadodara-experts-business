import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Tally GST setup in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional tally gst setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/tally-gst-setup-vadodara" },
  openGraph: {
    title: "Tally GST setup in Vadodara | VadodaraExperts",
    description: "Professional tally gst setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/tally-gst-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tally-gst-setup-vadodara" />;
}
