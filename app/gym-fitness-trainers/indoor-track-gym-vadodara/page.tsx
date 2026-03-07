import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Indoor track gym in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional indoor track gym services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/indoor-track-gym-vadodara" },
  openGraph: {
    title: "Indoor track gym in Vadodara | VadodaraExperts",
    description: "Professional indoor track gym services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/indoor-track-gym-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indoor-track-gym-vadodara" />;
}
