import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Home personal trainer in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional home personal trainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/home-personal-trainer-vadodara" },
  openGraph: {
    title: "Home personal trainer in Vadodara | VadodaraExperts",
    description: "Professional home personal trainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/home-personal-trainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-personal-trainer-vadodara" />;
}
