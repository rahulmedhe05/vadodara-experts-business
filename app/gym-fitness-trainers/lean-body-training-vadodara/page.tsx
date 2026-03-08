import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Lean body training in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional lean body training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/lean-body-training-vadodara" },
  openGraph: {
    title: "Lean body training in Vadodara | VadodaraExperts",
    description: "Professional lean body training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/lean-body-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lean-body-training-vadodara" />;
}
