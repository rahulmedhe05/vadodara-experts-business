import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "doubt solving class in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional doubt solving class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/doubt-solving-class-vadodara" },
  openGraph: {
    title: "doubt solving class in Vadodara | VadodaraExperts",
    description: "Professional doubt solving class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/doubt-solving-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="doubt-solving-class-vadodara" />;
}
