import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Sports nutrition in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional sports nutrition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/sports-nutrition-vadodara" },
  openGraph: {
    title: "Sports nutrition in Vadodara | VadodaraExperts",
    description: "Professional sports nutrition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/sports-nutrition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sports-nutrition-vadodara" />;
}
