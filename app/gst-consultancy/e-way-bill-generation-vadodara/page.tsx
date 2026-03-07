import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "E way bill generation in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional e way bill generation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/e-way-bill-generation-vadodara" },
  openGraph: {
    title: "E way bill generation in Vadodara | VadodaraExperts",
    description: "Professional e way bill generation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/e-way-bill-generation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="e-way-bill-generation-vadodara" />;
}
