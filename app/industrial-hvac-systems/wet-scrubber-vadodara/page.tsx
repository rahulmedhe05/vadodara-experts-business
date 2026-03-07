import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "wet scrubber in Vadodara | Industrial HVAC Systems | VadodaraExperts",
  description: "Professional wet scrubber services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems/wet-scrubber-vadodara" },
  openGraph: {
    title: "wet scrubber in Vadodara | VadodaraExperts",
    description: "Professional wet scrubber services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems/wet-scrubber-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wet-scrubber-vadodara" />;
}
