import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "higher secondary coaching in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional higher secondary coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/higher-secondary-coaching-vadodara" },
  openGraph: {
    title: "higher secondary coaching in Vadodara | VadodaraExperts",
    description: "Professional higher secondary coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/higher-secondary-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="higher-secondary-coaching-vadodara" />;
}
