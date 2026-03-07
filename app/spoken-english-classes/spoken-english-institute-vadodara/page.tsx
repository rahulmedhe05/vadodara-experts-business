import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "spoken English institute in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional spoken english institute services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/spoken-english-institute-vadodara" },
  openGraph: {
    title: "spoken English institute in Vadodara | VadodaraExperts",
    description: "Professional spoken english institute services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/spoken-english-institute-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spoken-english-institute-vadodara" />;
}
