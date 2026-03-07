import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Women fitness class in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional women fitness class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/women-fitness-class-vadodara" },
  openGraph: {
    title: "Women fitness class in Vadodara | VadodaraExperts",
    description: "Professional women fitness class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/women-fitness-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="women-fitness-class-vadodara" />;
}
