import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "Gujarati to English speaking in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional gujarati to english speaking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/gujarati-to-english-speaking-vadodara" },
  openGraph: {
    title: "Gujarati to English speaking in Vadodara | VadodaraExperts",
    description: "Professional gujarati to english speaking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/gujarati-to-english-speaking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gujarati-to-english-speaking-vadodara" />;
}
