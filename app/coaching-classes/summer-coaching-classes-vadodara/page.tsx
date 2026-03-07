import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "summer coaching classes in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional summer coaching classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/summer-coaching-classes-vadodara" },
  openGraph: {
    title: "summer coaching classes in Vadodara | VadodaraExperts",
    description: "Professional summer coaching classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/summer-coaching-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="summer-coaching-classes-vadodara" />;
}
