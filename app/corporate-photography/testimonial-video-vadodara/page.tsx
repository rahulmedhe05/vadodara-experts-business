import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Testimonial video in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional testimonial video services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/testimonial-video-vadodara" },
  openGraph: {
    title: "Testimonial video in Vadodara | VadodaraExperts",
    description: "Professional testimonial video services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/testimonial-video-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="testimonial-video-vadodara" />;
}
