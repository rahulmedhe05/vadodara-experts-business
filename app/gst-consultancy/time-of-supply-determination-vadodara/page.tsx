import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Time of supply determination in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional time of supply determination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/time-of-supply-determination-vadodara" },
  openGraph: {
    title: "Time of supply determination in Vadodara | VadodaraExperts",
    description: "Professional time of supply determination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/time-of-supply-determination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="time-of-supply-determination-vadodara" />;
}
