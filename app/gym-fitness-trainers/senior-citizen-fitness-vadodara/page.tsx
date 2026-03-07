import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Senior citizen fitness in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional senior citizen fitness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/senior-citizen-fitness-vadodara" },
  openGraph: {
    title: "Senior citizen fitness in Vadodara | VadodaraExperts",
    description: "Professional senior citizen fitness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/senior-citizen-fitness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="senior-citizen-fitness-vadodara" />;
}
