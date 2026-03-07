import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "personal English trainer in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional personal english trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/personal-english-trainer-vadodara" },
  openGraph: {
    title: "personal English trainer in Vadodara | VadodaraExperts",
    description: "Professional personal english trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/personal-english-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-english-trainer-vadodara" />;
}
