import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Yoga studio gym in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional yoga studio gym services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/yoga-studio-gym-vadodara" },
  openGraph: {
    title: "Yoga studio gym in Vadodara | VadodaraExperts",
    description: "Professional yoga studio gym services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/yoga-studio-gym-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yoga-studio-gym-vadodara" />;
}
