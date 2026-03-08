import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "law entrance coaching in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional law entrance coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/law-entrance-coaching-vadodara" },
  openGraph: {
    title: "law entrance coaching in Vadodara | VadodaraExperts",
    description: "Professional law entrance coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/law-entrance-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="law-entrance-coaching-vadodara" />;
}
