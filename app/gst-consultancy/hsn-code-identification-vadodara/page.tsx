import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "HSN code identification in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional hsn code identification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/hsn-code-identification-vadodara" },
  openGraph: {
    title: "HSN code identification in Vadodara | VadodaraExperts",
    description: "Professional hsn code identification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/hsn-code-identification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hsn-code-identification-vadodara" />;
}
