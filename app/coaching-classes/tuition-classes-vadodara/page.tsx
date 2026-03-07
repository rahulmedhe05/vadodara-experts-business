import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "tuition classes in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional tuition classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/tuition-classes-vadodara" },
  openGraph: {
    title: "tuition classes in Vadodara | VadodaraExperts",
    description: "Professional tuition classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/tuition-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tuition-classes-vadodara" />;
}
