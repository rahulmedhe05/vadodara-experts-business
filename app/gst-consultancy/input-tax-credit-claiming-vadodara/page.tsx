import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Input tax credit claiming in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional input tax credit claiming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/input-tax-credit-claiming-vadodara" },
  openGraph: {
    title: "Input tax credit claiming in Vadodara | VadodaraExperts",
    description: "Professional input tax credit claiming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/input-tax-credit-claiming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="input-tax-credit-claiming-vadodara" />;
}
