import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Instant print photo booth in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional instant print photo booth services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/instant-print-photo-booth-vadodara" },
  openGraph: {
    title: "Instant print photo booth in Vadodara | VadodaraExperts",
    description: "Professional instant print photo booth services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/instant-print-photo-booth-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="instant-print-photo-booth-vadodara" />;
}
