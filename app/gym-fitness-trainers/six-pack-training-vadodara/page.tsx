import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Six pack training in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional six pack training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/six-pack-training-vadodara" },
  openGraph: {
    title: "Six pack training in Vadodara | VadodaraExperts",
    description: "Professional six pack training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/six-pack-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="six-pack-training-vadodara" />;
}
