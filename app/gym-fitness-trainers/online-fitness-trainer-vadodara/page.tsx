import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Online fitness trainer in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional online fitness trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/online-fitness-trainer-vadodara" },
  openGraph: {
    title: "Online fitness trainer in Vadodara | VadodaraExperts",
    description: "Professional online fitness trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/online-fitness-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-fitness-trainer-vadodara" />;
}
