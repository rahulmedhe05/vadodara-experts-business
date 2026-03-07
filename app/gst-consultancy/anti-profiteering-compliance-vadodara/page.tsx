import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Anti profiteering compliance in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional anti profiteering compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/anti-profiteering-compliance-vadodara" },
  openGraph: {
    title: "Anti profiteering compliance in Vadodara | VadodaraExperts",
    description: "Professional anti profiteering compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/anti-profiteering-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-profiteering-compliance-vadodara" />;
}
