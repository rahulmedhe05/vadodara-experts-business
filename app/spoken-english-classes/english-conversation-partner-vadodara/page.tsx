import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "English conversation partner in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional english conversation partner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/english-conversation-partner-vadodara" },
  openGraph: {
    title: "English conversation partner in Vadodara | VadodaraExperts",
    description: "Professional english conversation partner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/english-conversation-partner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="english-conversation-partner-vadodara" />;
}
