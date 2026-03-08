import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "traditional hotel interior in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional traditional hotel interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/traditional-hotel-interior-vadodara" },
  openGraph: {
    title: "traditional hotel interior in Vadodara | VadodaraExperts",
    description: "Professional traditional hotel interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/traditional-hotel-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="traditional-hotel-interior-vadodara" />;
}
