import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "intermediate English class in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional intermediate english class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/intermediate-english-class-vadodara" },
  openGraph: {
    title: "intermediate English class in Vadodara | VadodaraExperts",
    description: "Professional intermediate english class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/intermediate-english-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intermediate-english-class-vadodara" />;
}
