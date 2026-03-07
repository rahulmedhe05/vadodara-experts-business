import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Drone videography couple in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional drone videography couple services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/drone-videography-couple-vadodara" },
  openGraph: {
    title: "Drone videography couple in Vadodara | VadodaraExperts",
    description: "Professional drone videography couple services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/drone-videography-couple-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drone-videography-couple-vadodara" />;
}
