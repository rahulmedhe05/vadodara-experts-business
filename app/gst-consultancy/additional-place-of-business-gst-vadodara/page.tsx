import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Additional place of business GST in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional additional place of business gst services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/additional-place-of-business-gst-vadodara" },
  openGraph: {
    title: "Additional place of business GST in Vadodara | VadodaraExperts",
    description: "Professional additional place of business gst services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/additional-place-of-business-gst-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="additional-place-of-business-gst-vadodara" />;
}
