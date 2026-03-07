import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Meditation teacher training in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional meditation teacher training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/meditation-teacher-training-vadodara" },
  openGraph: {
    title: "Meditation teacher training in Vadodara | VadodaraExperts",
    description: "Professional meditation teacher training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/meditation-teacher-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="meditation-teacher-training-vadodara" />;
}
