import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Bulking program in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional bulking program services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/bulking-program-vadodara" },
  openGraph: {
    title: "Bulking program in Vadodara | VadodaraExperts",
    description: "Professional bulking program services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/bulking-program-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bulking-program-vadodara" />;
}
