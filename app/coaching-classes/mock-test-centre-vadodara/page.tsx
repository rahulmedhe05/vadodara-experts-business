import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "mock test centre in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional mock test centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/mock-test-centre-vadodara" },
  openGraph: {
    title: "mock test centre in Vadodara | VadodaraExperts",
    description: "Professional mock test centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/mock-test-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mock-test-centre-vadodara" />;
}
