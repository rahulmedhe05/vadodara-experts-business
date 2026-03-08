import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Interior photography real estate in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional interior photography real estate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/interior-photography-real-estate-vadodara" },
  openGraph: {
    title: "Interior photography real estate in Vadodara | VadodaraExperts",
    description: "Professional interior photography real estate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/interior-photography-real-estate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-photography-real-estate-vadodara" />;
}
