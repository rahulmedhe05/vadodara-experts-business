import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Workout gym in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional workout gym services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/workout-gym-vadodara" },
  openGraph: {
    title: "Workout gym in Vadodara | VadodaraExperts",
    description: "Professional workout gym services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/workout-gym-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="workout-gym-vadodara" />;
}
