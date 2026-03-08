import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Veterinary waste disposal in Vadodara | Garbage Collection Contractors | VadodaraExperts",
  description: "Professional veterinary waste disposal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors/veterinary-waste-disposal-vadodara" },
  openGraph: {
    title: "Veterinary waste disposal in Vadodara | VadodaraExperts",
    description: "Professional veterinary waste disposal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors/veterinary-waste-disposal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="veterinary-waste-disposal-vadodara" />;
}
