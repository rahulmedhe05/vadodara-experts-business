import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Gym with parking in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional gym with parking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/gym-with-parking-vadodara" },
  openGraph: {
    title: "Gym with parking in Vadodara | VadodaraExperts",
    description: "Professional gym with parking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/gym-with-parking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gym-with-parking-vadodara" />;
}
