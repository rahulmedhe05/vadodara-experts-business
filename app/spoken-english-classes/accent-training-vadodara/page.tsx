import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "accent training in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional accent training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/accent-training-vadodara" },
  openGraph: {
    title: "accent training in Vadodara | VadodaraExperts",
    description: "Professional accent training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/accent-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="accent-training-vadodara" />;
}
