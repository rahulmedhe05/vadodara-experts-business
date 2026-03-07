import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "private English tutor in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional private english tutor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/private-english-tutor-vadodara" },
  openGraph: {
    title: "private English tutor in Vadodara | VadodaraExperts",
    description: "Professional private english tutor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/private-english-tutor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="private-english-tutor-vadodara" />;
}
