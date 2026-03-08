import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Cutting program in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional cutting program services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/cutting-program-vadodara" },
  openGraph: {
    title: "Cutting program in Vadodara | VadodaraExperts",
    description: "Professional cutting program services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/cutting-program-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cutting-program-vadodara" />;
}
