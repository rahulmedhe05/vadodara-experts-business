import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Photo booth rental in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional photo booth rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/photo-booth-rental-vadodara" },
  openGraph: {
    title: "Photo booth rental in Vadodara | VadodaraExperts",
    description: "Professional photo booth rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/photo-booth-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="photo-booth-rental-vadodara" />;
}
