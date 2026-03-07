import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gym-fitness-trainers")!;

export const metadata: Metadata = {
  title: "Body sculpting in Vadodara | Gym & Fitness Trainers | VadodaraExperts",
  description: "Professional body sculpting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gym-fitness-trainers/body-sculpting-vadodara" },
  openGraph: {
    title: "Body sculpting in Vadodara | VadodaraExperts",
    description: "Professional body sculpting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gym-fitness-trainers/body-sculpting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="body-sculpting-vadodara" />;
}
