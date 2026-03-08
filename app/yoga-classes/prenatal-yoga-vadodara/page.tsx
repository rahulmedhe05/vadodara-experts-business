import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Prenatal yoga in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional prenatal yoga services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/prenatal-yoga-vadodara" },
  openGraph: {
    title: "Prenatal yoga in Vadodara | VadodaraExperts",
    description: "Professional prenatal yoga services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/prenatal-yoga-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prenatal-yoga-vadodara" />;
}
