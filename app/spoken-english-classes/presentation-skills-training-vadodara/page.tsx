import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "presentation skills training in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional presentation skills training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/presentation-skills-training-vadodara" },
  openGraph: {
    title: "presentation skills training in Vadodara | VadodaraExperts",
    description: "Professional presentation skills training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/presentation-skills-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="presentation-skills-training-vadodara" />;
}
