import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "interview preparation English in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional interview preparation english services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/interview-preparation-english-vadodara" },
  openGraph: {
    title: "interview preparation English in Vadodara | VadodaraExperts",
    description: "Professional interview preparation english services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/interview-preparation-english-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interview-preparation-english-vadodara" />;
}
