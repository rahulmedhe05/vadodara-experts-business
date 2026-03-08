import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "best spoken English classes in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional best spoken english classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/best-spoken-english-classes-vadodara" },
  openGraph: {
    title: "best spoken English classes in Vadodara | VadodaraExperts",
    description: "Professional best spoken english classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/best-spoken-english-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-spoken-english-classes-vadodara" />;
}
