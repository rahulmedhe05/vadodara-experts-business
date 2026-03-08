import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "English coaching near me in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional english coaching near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/english-coaching-near-me-vadodara" },
  openGraph: {
    title: "English coaching near me in Vadodara | VadodaraExperts",
    description: "Professional english coaching near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/english-coaching-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="english-coaching-near-me-vadodara" />;
}
