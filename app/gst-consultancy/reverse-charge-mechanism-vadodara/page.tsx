import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Reverse charge mechanism in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional reverse charge mechanism services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/reverse-charge-mechanism-vadodara" },
  openGraph: {
    title: "Reverse charge mechanism in Vadodara | VadodaraExperts",
    description: "Professional reverse charge mechanism services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/reverse-charge-mechanism-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reverse-charge-mechanism-vadodara" />;
}
