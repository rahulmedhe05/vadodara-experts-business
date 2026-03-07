import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Yoga near me in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional yoga near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/yoga-near-me-vadodara" },
  openGraph: {
    title: "Yoga near me in Vadodara | VadodaraExperts",
    description: "Professional yoga near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/yoga-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-near-me-vadodara" />;
}
