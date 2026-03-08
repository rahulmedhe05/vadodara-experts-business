import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("spoken-english-classes")!;

export const metadata: Metadata = {
  title: "spoken English classes in Vadodara | Spoken English Classes | VadodaraExperts",
  description: "Professional spoken english classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/spoken-english-classes/spoken-english-classes-vadodara" },
  openGraph: {
    title: "spoken English classes in Vadodara | VadodaraExperts",
    description: "Professional spoken english classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/spoken-english-classes/spoken-english-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spoken-english-classes-vadodara" />;
}
