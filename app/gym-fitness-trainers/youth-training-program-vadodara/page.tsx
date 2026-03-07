import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Youth training program in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional youth training program services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/youth-training-program-vadodara" },
  openGraph: {
    title: "Youth training program in Vadodara | VadodaraExperts",
    description: "Professional youth training program services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/youth-training-program-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="youth-training-program-vadodara" />;
}
