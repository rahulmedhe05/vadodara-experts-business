import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "cheap English speaking course in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional cheap english speaking course services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/cheap-english-speaking-course-vadodara" },
  openGraph: {
    title: "cheap English speaking course in Vadodara | VadodaraExperts",
    description: "Professional cheap english speaking course services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/cheap-english-speaking-course-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cheap-english-speaking-course-vadodara" />;
}
