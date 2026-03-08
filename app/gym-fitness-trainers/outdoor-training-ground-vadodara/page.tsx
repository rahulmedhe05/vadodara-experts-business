import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Outdoor training ground in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional outdoor training ground services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/outdoor-training-ground-vadodara" },
  openGraph: {
    title: "Outdoor training ground in Vadodara | VadodaraExperts",
    description: "Professional outdoor training ground services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/outdoor-training-ground-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-training-ground-vadodara" />;
}
