import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Kids fitness class in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional kids fitness class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/kids-fitness-class-vadodara" },
  openGraph: {
    title: "Kids fitness class in Vadodara | VadodaraExperts",
    description: "Professional kids fitness class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/kids-fitness-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kids-fitness-class-vadodara" />;
}
