import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "native English speaker class in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional native english speaker class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/native-english-speaker-class-vadodara" },
  openGraph: {
    title: "native English speaker class in Vadodara | VadodaraExperts",
    description: "Professional native english speaker class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/native-english-speaker-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="native-english-speaker-class-vadodara" />;
}
