import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Drone photography wedding in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional drone photography wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/drone-photography-wedding-vadodara" },
  openGraph: {
    title: "Drone photography wedding in Vadodara | VadodaraExperts",
    description: "Professional drone photography wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/drone-photography-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drone-photography-wedding-vadodara" />;
}
