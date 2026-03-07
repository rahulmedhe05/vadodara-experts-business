import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "English tutor at home in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional english tutor at home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/english-tutor-at-home-vadodara" },
  openGraph: {
    title: "English tutor at home in Vadodara | VadodaraExperts",
    description: "Professional english tutor at home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/english-tutor-at-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="english-tutor-at-home-vadodara" />;
}
