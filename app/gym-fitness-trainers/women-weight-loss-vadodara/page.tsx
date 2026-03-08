import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Women weight loss in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional women weight loss services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/women-weight-loss-vadodara" },
  openGraph: {
    title: "Women weight loss in Vadodara | VadodaraExperts",
    description: "Professional women weight loss services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/women-weight-loss-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="women-weight-loss-vadodara" />;
}
