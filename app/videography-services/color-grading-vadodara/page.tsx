import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Color grading in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional color grading services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/color-grading-vadodara" },
  openGraph: {
    title: "Color grading in Vadodara | VadodaraExperts",
    description: "Professional color grading services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/color-grading-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="color-grading-vadodara" />;
}
