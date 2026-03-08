import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "coaching institute in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional coaching institute services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/coaching-institute-vadodara" },
  openGraph: {
    title: "coaching institute in Vadodara | VadodaraExperts",
    description: "Professional coaching institute services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/coaching-institute-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="coaching-institute-vadodara" />;
}
