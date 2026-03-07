import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Gym & Fitness Trainers in Vadodara | VadodaraExperts",
  description: "Find the best gym & fitness trainers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers" },
  openGraph: {
    title: "Gym & Fitness Trainers in Vadodara | VadodaraExperts",
    description: "Find the best gym & fitness trainers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
