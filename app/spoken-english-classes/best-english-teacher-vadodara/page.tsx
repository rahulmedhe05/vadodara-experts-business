import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "best English teacher in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional best english teacher services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/best-english-teacher-vadodara" },
  openGraph: {
    title: "best English teacher in Vadodara | VadodaraExperts",
    description: "Professional best english teacher services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/best-english-teacher-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-english-teacher-vadodara" />;
}
