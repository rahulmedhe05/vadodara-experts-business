import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "English for study abroad in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional english for study abroad services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/english-for-study-abroad-vadodara" },
  openGraph: {
    title: "English for study abroad in Vadodara | VadodaraExperts",
    description: "Professional english for study abroad services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/english-for-study-abroad-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="english-for-study-abroad-vadodara" />;
}
