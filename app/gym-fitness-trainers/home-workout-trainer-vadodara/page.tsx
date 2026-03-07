import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Home workout trainer in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional home workout trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/home-workout-trainer-vadodara" },
  openGraph: {
    title: "Home workout trainer in Vadodara | VadodaraExperts",
    description: "Professional home workout trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/home-workout-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-workout-trainer-vadodara" />;
}
