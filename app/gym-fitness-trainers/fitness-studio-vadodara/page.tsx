import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Fitness studio in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional fitness studio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/fitness-studio-vadodara" },
  openGraph: {
    title: "Fitness studio in Vadodara | VadodaraExperts",
    description: "Professional fitness studio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/fitness-studio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fitness-studio-vadodara" />;
}
