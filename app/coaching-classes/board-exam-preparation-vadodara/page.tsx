import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "board exam preparation in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional board exam preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/board-exam-preparation-vadodara" },
  openGraph: {
    title: "board exam preparation in Vadodara | VadodaraExperts",
    description: "Professional board exam preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/board-exam-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="board-exam-preparation-vadodara" />;
}
