import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Guided meditation in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional guided meditation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/guided-meditation-vadodara" },
  openGraph: {
    title: "Guided meditation in Vadodara | VadodaraExperts",
    description: "Professional guided meditation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/guided-meditation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="guided-meditation-vadodara" />;
}
