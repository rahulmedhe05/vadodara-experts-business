import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Steam bath gym in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional steam bath gym services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/steam-bath-gym-vadodara" },
  openGraph: {
    title: "Steam bath gym in Vadodara | VadodaraExperts",
    description: "Professional steam bath gym services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/steam-bath-gym-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-bath-gym-vadodara" />;
}
