import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "English fluency course in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional english fluency course services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/english-fluency-course-vadodara" },
  openGraph: {
    title: "English fluency course in Vadodara | VadodaraExperts",
    description: "Professional english fluency course services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/english-fluency-course-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="english-fluency-course-vadodara" />;
}
