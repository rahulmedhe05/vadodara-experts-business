import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Fat loss training in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional fat loss training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/fat-loss-training-vadodara" },
  openGraph: {
    title: "Fat loss training in Vadodara | VadodaraExperts",
    description: "Professional fat loss training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/fat-loss-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fat-loss-training-vadodara" />;
}
