import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "class 9 tuition in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional class 9 tuition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/class-9-tuition-vadodara" },
  openGraph: {
    title: "class 9 tuition in Vadodara | VadodaraExperts",
    description: "Professional class 9 tuition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/class-9-tuition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="class-9-tuition-vadodara" />;
}
