import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "SAT coaching in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional sat coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/sat-coaching-vadodara" },
  openGraph: {
    title: "SAT coaching in Vadodara | VadodaraExperts",
    description: "Professional sat coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/sat-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sat-coaching-vadodara" />;
}
