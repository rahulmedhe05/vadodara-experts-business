import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "American accent training in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional american accent training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/american-accent-training-vadodara" },
  openGraph: {
    title: "American accent training in Vadodara | VadodaraExperts",
    description: "Professional american accent training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/american-accent-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="american-accent-training-vadodara" />;
}
