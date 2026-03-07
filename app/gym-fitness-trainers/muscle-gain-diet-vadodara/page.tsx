import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Muscle gain diet in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional muscle gain diet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/muscle-gain-diet-vadodara" },
  openGraph: {
    title: "Muscle gain diet in Vadodara | VadodaraExperts",
    description: "Professional muscle gain diet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/muscle-gain-diet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="muscle-gain-diet-vadodara" />;
}
