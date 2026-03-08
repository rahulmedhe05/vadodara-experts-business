import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Postnatal fitness in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional postnatal fitness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/postnatal-fitness-vadodara" },
  openGraph: {
    title: "Postnatal fitness in Vadodara | VadodaraExperts",
    description: "Professional postnatal fitness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/postnatal-fitness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="postnatal-fitness-vadodara" />;
}
