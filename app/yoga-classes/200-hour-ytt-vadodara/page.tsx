import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "200 hour YTT in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional 200 hour ytt services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/200-hour-ytt-vadodara" },
  openGraph: {
    title: "200 hour YTT in Vadodara | VadodaraExperts",
    description: "Professional 200 hour ytt services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/200-hour-ytt-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="200-hour-ytt-vadodara" />;
}
