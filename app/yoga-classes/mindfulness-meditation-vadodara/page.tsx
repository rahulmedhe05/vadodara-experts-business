import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Mindfulness meditation in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional mindfulness meditation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/mindfulness-meditation-vadodara" },
  openGraph: {
    title: "Mindfulness meditation in Vadodara | VadodaraExperts",
    description: "Professional mindfulness meditation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/mindfulness-meditation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mindfulness-meditation-vadodara" />;
}
