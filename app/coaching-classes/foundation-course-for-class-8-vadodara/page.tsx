import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("coaching-classes")!;

export const metadata: Metadata = {
  title: "foundation course for class 8 in Vadodara | Coaching Classes | VadodaraExperts",
  description: "Professional foundation course for class 8 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/coaching-classes/foundation-course-for-class-8-vadodara" },
  openGraph: {
    title: "foundation course for class 8 in Vadodara | VadodaraExperts",
    description: "Professional foundation course for class 8 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/coaching-classes/foundation-course-for-class-8-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foundation-course-for-class-8-vadodara" />;
}
