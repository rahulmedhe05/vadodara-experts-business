import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "24 hour gym in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional 24 hour gym services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/24-hour-gym-vadodara" },
  openGraph: {
    title: "24 hour gym in Vadodara | VadodaraExperts",
    description: "Professional 24 hour gym services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/24-hour-gym-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="24-hour-gym-vadodara" />;
}
