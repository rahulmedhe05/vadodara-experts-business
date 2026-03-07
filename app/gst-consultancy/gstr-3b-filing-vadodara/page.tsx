import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GSTR 3B filing in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional gstr 3b filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/gstr-3b-filing-vadodara" },
  openGraph: {
    title: "GSTR 3B filing in Vadodara | VadodaraExperts",
    description: "Professional gstr 3b filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/gstr-3b-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gstr-3b-filing-vadodara" />;
}
