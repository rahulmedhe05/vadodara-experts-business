import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Laughter yoga in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional laughter yoga services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/laughter-yoga-vadodara" },
  openGraph: {
    title: "Laughter yoga in Vadodara | VadodaraExperts",
    description: "Professional laughter yoga services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/laughter-yoga-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laughter-yoga-vadodara" />;
}
