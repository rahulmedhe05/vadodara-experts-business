import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Aerobics classes in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional aerobics classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/aerobics-classes-vadodara" },
  openGraph: {
    title: "Aerobics classes in Vadodara | VadodaraExperts",
    description: "Professional aerobics classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/aerobics-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aerobics-classes-vadodara" />;
}
