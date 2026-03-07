import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Nutrition coach in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional nutrition coach services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/nutrition-coach-vadodara" },
  openGraph: {
    title: "Nutrition coach in Vadodara | VadodaraExperts",
    description: "Professional nutrition coach services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/nutrition-coach-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nutrition-coach-vadodara" />;
}
