import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "TOEFL coaching in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional toefl coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/toefl-coaching-vadodara" },
  openGraph: {
    title: "TOEFL coaching in Vadodara | VadodaraExperts",
    description: "Professional toefl coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/toefl-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="toefl-coaching-vadodara" />;
}
