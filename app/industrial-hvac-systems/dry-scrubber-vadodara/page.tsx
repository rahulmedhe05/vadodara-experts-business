import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "dry scrubber in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional dry scrubber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/dry-scrubber-vadodara" },
  openGraph: {
    title: "dry scrubber in Vadodara | VadodaraExperts",
    description: "Professional dry scrubber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/dry-scrubber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-scrubber-vadodara" />;
}
