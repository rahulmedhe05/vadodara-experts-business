import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "PTE speaking preparation in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional pte speaking preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/pte-speaking-preparation-vadodara" },
  openGraph: {
    title: "PTE speaking preparation in Vadodara | VadodaraExperts",
    description: "Professional pte speaking preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/pte-speaking-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pte-speaking-preparation-vadodara" />;
}
