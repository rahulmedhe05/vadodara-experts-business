import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Functional training in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional functional training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/functional-training-vadodara" },
  openGraph: {
    title: "Functional training in Vadodara | VadodaraExperts",
    description: "Professional functional training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/functional-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="functional-training-vadodara" />;
}
