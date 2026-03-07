import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "one to one English class in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional one to one english class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/one-to-one-english-class-vadodara" },
  openGraph: {
    title: "one to one English class in Vadodara | VadodaraExperts",
    description: "Professional one to one english class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/one-to-one-english-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="one-to-one-english-class-vadodara" />;
}
