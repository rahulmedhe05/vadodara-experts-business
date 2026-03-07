import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "diploma in English in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional diploma in english services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/diploma-in-english-vadodara" },
  openGraph: {
    title: "diploma in English in Vadodara | VadodaraExperts",
    description: "Professional diploma in english services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/diploma-in-english-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diploma-in-english-vadodara" />;
}
