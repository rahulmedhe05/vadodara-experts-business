import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Gym equipment supplier in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional gym equipment supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/gym-equipment-supplier-vadodara" },
  openGraph: {
    title: "Gym equipment supplier in Vadodara | VadodaraExperts",
    description: "Professional gym equipment supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/gym-equipment-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gym-equipment-supplier-vadodara" />;
}
