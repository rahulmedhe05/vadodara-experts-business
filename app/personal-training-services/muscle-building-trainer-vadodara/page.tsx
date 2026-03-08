import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Muscle building trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional muscle building trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/muscle-building-trainer-vadodara" },
  openGraph: {
    title: "Muscle building trainer in Vadodara | VadodaraExperts",
    description: "Professional muscle building trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/muscle-building-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="muscle-building-trainer-vadodara" />;
}
