import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Vipassana meditation in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional vipassana meditation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/vipassana-meditation-vadodara" },
  openGraph: {
    title: "Vipassana meditation in Vadodara | VadodaraExperts",
    description: "Professional vipassana meditation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/vipassana-meditation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vipassana-meditation-vadodara" />;
}
