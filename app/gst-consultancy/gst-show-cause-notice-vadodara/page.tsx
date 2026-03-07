import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST show cause notice in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gst show cause notice services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gst-show-cause-notice-vadodara" },
  openGraph: {
    title: "GST show cause notice in Vadodara | VadodaraExperts",
    description: "Professional gst show cause notice services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gst-show-cause-notice-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gst-show-cause-notice-vadodara" />;
}
