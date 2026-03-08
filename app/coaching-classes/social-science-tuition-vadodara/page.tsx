import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "social science tuition in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional social science tuition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/social-science-tuition-vadodara" },
  openGraph: {
    title: "social science tuition in Vadodara | VadodaraExperts",
    description: "Professional social science tuition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/social-science-tuition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="social-science-tuition-vadodara" />;
}
