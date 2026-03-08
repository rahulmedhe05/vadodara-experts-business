import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Elderly exercise program in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional elderly exercise program services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/elderly-exercise-program-vadodara" },
  openGraph: {
    title: "Elderly exercise program in Vadodara | VadodaraExperts",
    description: "Professional elderly exercise program services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/elderly-exercise-program-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elderly-exercise-program-vadodara" />;
}
