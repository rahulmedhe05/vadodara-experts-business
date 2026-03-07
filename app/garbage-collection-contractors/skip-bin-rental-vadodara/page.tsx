import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Skip bin rental in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional skip bin rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/skip-bin-rental-vadodara" },
  openGraph: {
    title: "Skip bin rental in Vadodara | VadodaraExperts",
    description: "Professional skip bin rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/skip-bin-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="skip-bin-rental-vadodara" />;
}
